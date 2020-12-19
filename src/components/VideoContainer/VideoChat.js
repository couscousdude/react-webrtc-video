import React from 'react';
import { Button } from '@material-ui/core';

function VideoChat(props) {
    const [username, setUsername] = React.useState('');
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    const handleLogin = () => {
        // if (isLoggedIn === false) {
        //     setIsLoggedIn(true);
        // }
        // else {
        //     setIsLoggedIn(false);
        // }
        setIsLoggedIn(!isLoggedIn);
    }

    return(
        <div>
            <Button>{isLoggedIn ? 'Start Meeting' : 'Login'}</Button>
            <Button onClick={handleLogin}>Change Login Status</Button>
        </div>
    );
}

export default VideoChat;