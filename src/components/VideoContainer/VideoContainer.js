import React from 'react';
import VideoChat from './VideoChat';
import MediaDisplay from './MediaDisplay';

function VideoChatContainer(props) {
    return(
        <div>
            <VideoChat isLoggedIn={true} />
            <MediaDisplay />
        </div>
    );
}

export default VideoChatContainer;