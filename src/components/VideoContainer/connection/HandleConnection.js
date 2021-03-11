import firebase from 'firebase';
import firebaseConfig from '../../../public/firebaseConfig';

class ConnectionHandler {
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
        }
    }
    async openUserMedia(e) {
        const stream = await navigator.mediaDevices.getUserMedia(
            {video: true, audio: true}
        );
    }
}

const connectionHandler = new ConnectionHandler();
const dfjlkfdaljk = new ConnectionHandler();

connectionHandler.printConfig();
connectionHandler.createCall();