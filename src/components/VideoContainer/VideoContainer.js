import React from 'react';
import VideoHomepage from './VideoHomepage';

function VideoChatContainer(props) {
    return(
        <div>
            <VideoHomepage isLoggedIn={true} />
            {/* <MediaDisplay /> */}
        </div>
    );
}

export default VideoChatContainer;