import firebase from 'firebase';
import firebaseConfig from '../../../public/firebaseConfig';
const config = require('./config.json');

async function createCall(peerConnection) {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app();
    }
    const db = firebase.firestore();

    console.log(`DB Connection Started. Creating PeerConnection with config: ${config}`);
    

    peerConnection = new RTCPeerConnection(config);

    // localstream addtracks here

}