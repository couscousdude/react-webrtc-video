import React from 'react';
import MediaDisplay from './MediaDisplay';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

const VideoChat = props => {
    const { remoteVideoId, localVideoId, onOpen } = props;

    React.useEffect(() => {
        onOpen();
    }, [onOpen]);

    return (
        <div>
            <MediaDisplay 
                localId={localVideoId}
                remoteId={remoteVideoId}
            />
            <Button variant='outlined' onClick={onOpen}>Refresh</Button>
        </div>
    );
}

export default VideoChat;

VideoChat.propTypes = {
    remoteVideoId: PropTypes.string,
    localVideoId: PropTypes.string,
    onOpen: PropTypes.func
}