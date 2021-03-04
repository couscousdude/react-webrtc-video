const config = require('./config.json');
import firebase from 'firebase';
import firebaseConfig from '../../../public/firebaseConfig';

async function createCall() {
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