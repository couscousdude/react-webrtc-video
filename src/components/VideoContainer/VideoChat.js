import React from 'react';
import MediaDisplay from './MediaDisplay';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

const VideoChat = props => {
    const { remoteStream, localStream, onOpen } = props;

    React.useEffect(() => {
        onOpen();
    }, [onOpen]);

    return (
        <div>
            <MediaDisplay 
                localStream={localStream}
                remoteStream={remoteStream}
            />
            <Button variant='outlined' onClick={onOpen}>Refresh</Button>
        </div>
    );
}

export default VideoChat;

VideoChat.propTypes = {
    localStream: PropTypes.object,
    remoteStream: PropTypes.object,
    onOpen: PropTypes.func
}