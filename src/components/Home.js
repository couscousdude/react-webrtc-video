import React from 'react';
import { useHistory } from 'react-router-dom';

function Home(props) {
    const history = useHistory();

    return(
        <div>
            <h1 style={{ textAlign: 'center', marginTop: 20 }}>React Video Chat</h1>
            <button 
                style={{ marginTop: 40 }}
                onClick={() => {
                    history.push('/chat');
                }}
            >
                Go to Video
            </button>
        </div>
    )
}

export default Home;