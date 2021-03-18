import firebase from 'firebase';
import firebaseConfig from '../../../public/firebaseConfig';

export default class ConnectionHandler {
    constructor(config) {
        this.config = config;
        this.peerConnection = null;
        this.localStream = null;
        this.roomDialog = null;
        this.remoteStream = null;
        this.roomId = null;
    }
    async createCall() {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        } else {
            firebase.app();
        }
        const db = firebase.firestore();
    
        console.log(`DB Connection Started. Creating PeerConnection with config: ${this.config}`);
        this.peerConnection = new RTCPeerConnection(this.config);

        // Send webcam/audio track to remote client
        this.localStream
            .getTracks() // returns array
            .forEach(track => {
                this.peerConnection.addTrack(track, this.localStream);
            });
        
        // assume peerconnection is RTCPeerConnection instance
        this.peerConnection.addEventListener('track', event => {
            console.log(`Received remote track: ${event.streams[0]}`);
            event.streams[0]
                .getTracks()
                .forEach(track => {
                    this.remoteStream.addTrack(track);
                });
        });
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
                    peerConnection.addTrack(track, this.localStream);
                });
        }

        this.peerConnection.addEventListener('track', event => {
            console.log(`Received remote webcam/audio track: ${event.streams[0]}`);
            event.streams[0]
                .getTracks()
                .forEach(track => {
                    this.remoteStream.addTrack(track);
                });
        });


    }
    async openUserMedia(e) {
        const stream = await navigator.mediaDevices.getUserMedia(
            {video: true, audio: true}
        );
    }
}