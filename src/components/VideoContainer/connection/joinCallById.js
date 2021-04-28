import firebase from 'firebase';
import firebaseConfig from '../../../public/firebaseConfig';

async function joinCallById(roomId) {
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
        console.log(`Creating PeerConnection with configuration: ${config}`);
        peerConnection = new RTCPeerConnection(config);
    }
}