import firebase from 'firebase';
import firebaseConfig from '../../../public/firebaseConfig';

export default class ConnectionHandler {
    constructor(config) {
        this.config = config;
        this.peerConnection = null;
        this.localStream = new MediaStream();
        this.roomDialog = null;
        this.remoteStream = new MediaStream();
        this.roomId = null;
    }

    async createCall() {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        } else {
            firebase.app();
        }
        const db = firebase.firestore();
        const roomRef = await db.collection('rooms').doc();
    
        console.log(`DB Connection Started. Creating PeerConnection with config: ${{
            "iceServers": [
                {
                    "urls": [
                        "stun:stun1.l.google.com:19302",
                        "stun:stun2.l.google.com:19302"
                    ]
                }
            ],
            "iceCandidatePoolSize": 10
        }}`);
        // this.peerConnection = new RTCPeerConnection(this.config);
        this.peerConnection = new RTCPeerConnection({
            "iceServers": [
                {
                    "urls": [
                        "stun:stun1.l.google.com:19302",
                        "stun:stun2.l.google.com:19302"
                    ]
                }
            ],
            "iceCandidatePoolSize": 10
        });

        // Send webcam/audio track to remote client
        this.localStream
            .getTracks() // returns array
            .forEach(track => {
                this.peerConnection.addTrack(track, this.localStream);
            });
        
        // Collect ICE candidates

        const callerCandidatesCollection = roomRef.collection('callerCandidates');
        this.peerConnection.addEventListener('icecandidate', event => {
            if (!event.candidate) {
                console.log('Got final candidate');
                return;
            }
            console.log(`Got candidate: ${event.candidate}`);
            callerCandidatesCollection.add(event.candidate.toJSON());
        })

        // Create room
        const offer = await this.peerConnection.createOffer();
        await this.peerConnection.setLocalDescription(offer);
        console.log(`Offer created: ${offer}`);
        
        const roomWithOffer = {
            offer: {
                type: offer.type,
                sdp: offer.sdp
            }
        }
        await roomRef.set(roomWithOffer);
        this.roomId = roomRef.id;
        console.log(`New room created with SDP offer. Room ID: ${roomRef.id}`)
        navigator.clipboard.writeText(`${window.location.hostname}/chat/join?code=${roomRef.id}`);
        // alert(`ROOMID: ${roomRef.id}`)
        //https://www.npmjs.com/package/react-notifications-component
        // https://material-ui.com/components/snackbars/
        // IMPORTANT: TELL USER ROOM IS READY

        // assume peerconnection is RTCPeerConnection instance
        this.peerConnection.addEventListener('track', event => {
            console.log(`Received remote track: ${event.streams[0]}`);
            event.streams[0]
                .getTracks()
                .forEach(track => {
                    this.remoteStream.addTrack(track);
                });
        });

        roomRef.onSnapshot(async snapshot => {
            const data = snapshot.data();
            if (!this.peerConnection.currentRemoteDescription && data && data.answer) {
                console.log(`Got remote description: ${data.answer}`);
                const rtcSessionDescription = new RTCSessionDescription(data.answer);
                await this.peerConnection.setRemoteDescription(rtcSessionDescription);
            }
        });

        roomRef.collection('calleeCandidates').onSnapshot(snapshot => {
            snapshot.docChanges().forEach(async change => {
                if (change.type === 'added') {
                    let data = change.doc.data();
                    console.log(`Got new remote ICE candidate: ${JSON.stringify(data)}`);
                    await this.peerConnection.addIceCandidate(new RTCIceCandidate(data));
                }
            })
        })
    }
    async joinCallById(roomId) {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        } else {
            firebase.app();
        }
        const db = firebase.firestore();
    
        const roomRef = db.collection('rooms').doc(`${roomId}`);
        const roomSnapshot = await roomRef.get();
        console.log(`Got room: ${roomSnapshot.exists}`);
    
        if (roomSnapshot.exists) {
            console.log(`Creating PeerConnection with configuration: ${this.config}`);
            this.peerConnection = new RTCPeerConnection(this.config);

            this.localStream
                .getTracks()
                .forEach(track => {
                    this.peerConnection.addTrack(track, this.localStream);
                });
        }

        // Collect ICE candidates
        const calleeCandidatesCollection = roomRef.collection('calleeCandidates');
        this.peerConnection.addEventListener('icecandidate', event => {
            if (!event.candidate) {
                console.log('got final candidate');
                return;
            }
            console.log(`Got candidate: ${event.candidate}`);
            calleeCandidatesCollection.add(event.candidate.toJSON());
        });

        console.log('adding event listener for code');
        this.peerConnection.addEventListener('track', event => {
            console.log(`Received remote webcam/audio track: ${event.streams[0]}`);
            this.eventStream = event.streams[0];
            event.streams[0]
                .getTracks()
                .forEach(track => {
                    this.remoteStream.addTrack(track);
                });
        });

        const offer = roomSnapshot.data().offer;
        console.log(`Got offer: ${offer}`);
        await this.peerConnection.setRemoteDescription(new RTCSessionDescription(offer));
        const answer = await this.peerConnection.createAnswer();
        console.log(`Created answer: ${answer}`);
        await this.peerConnection.setLocalDescription(answer);

        const roomWithAnswer = {
            answer: {
                type: answer.type,
                sdp: answer.sdp
            }
        }
        await roomRef.update(roomWithAnswer);

        roomRef.collection('callerCandidates').onSnapshot(snapshot => {
            snapshot.docChanges().forEach(async change => {
                if (change.type === 'added') {
                    let data = change.doc.data();
                    console.log(`Got new remote ICE candidate: ${JSON.stringify(data)}`);
                    await this.peerConnection.addIceCandidate(new RTCIceCandidate(data));
                }
            });
        });
    }
    async openUserMedia(localVideo, remoteVideo) {
        let stream;
        try {
            stream = await navigator.mediaDevices.getUserMedia(
                { video: true, audio: true }
            );
        } catch(error) {
            console.log(`Opening Video/Audio failed! Trying again with audio only.`)

            stream = await navigator.mediaDevices.getUserMedia(
                { video: false, audio: true }
            );
        }

        stream.getTracks().forEach(track => {
            this.localStream.addTrack(track);
        });
    }
    async hangUp(e) {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        } else {
            firebase.app();
        }

        if (this.remoteStream) {
            this.remoteStream.getTracks().forEach(track => track.stop());
        }

        if (this.peerConnection) {
            this.peerConnection.close();
        }

        if (this.roomId) {
            const db = firebase.firestore();
            const roomRef = db.collection('rooms').doc(this.roomId);
            const calleeCandidates = await roomRef.collection('calleeCandidates').get();
            calleeCandidates.forEach(async candidate => {
                await candidate.ref.delete();
            });
            const callerCandidates = await roomRef.collection('callerCandidates').get();
            callerCandidates.forEach(async candidate => {
                await candidate.ref.delete();
            });
            
            await roomRef.delete();
        }
    }
}