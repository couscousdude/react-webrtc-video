import firebase from 'firebase';
import firebaseConfig from '../../../public/firebaseConfig';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const postMessage = async (roomId, messageSender, messageContent) => {
    const db = firebase.firestore();
    const roomRef = await db.collection('rooms').doc(roomId);

    roomRef.update({
        chatMessages: [
            {
                sender: messageSender,
                content: messageContent    
            }
        ]
    })
}

export default postMessage;