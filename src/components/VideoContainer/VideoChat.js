import React from 'react';
import MediaDisplay from './MediaDisplay';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

const VideoChat = props => {
    const { remoteStream, localStream, onOpen, onClose } = props;

    React.useEffect(() => {
        onOpen();
    }, [onOpen]);

    return (
        <div style={{ backgroundColor: 'black' }}>
            <MediaDisplay 
                localStream={localStream}
                remoteStream={remoteStream}
            />
        </div>
    );
}

export default VideoChat;

VideoChat.propTypes = {
    localStream: PropTypes.object,
    remoteStream: PropTypes.object,
    onOpen: PropTypes.func,
    onClose: PropTypes.func
}