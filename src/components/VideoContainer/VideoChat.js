import React from 'react';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
// import CreateCall from './CreateCallModal';
import CreateCall from './CreateCall';
import JoinCall from './JoinCall';
import { useHistory } from 'react-router-dom';

function VideoChat(props) {
    const { isLoggedIn } = props;
    // const [createCallDialogOpen, setCreateCallDialogOpen] = React.useState(false);
    const history = useHistory();
    // const [joinCallDialogueOpen, setJoinCallDialogueOpen] = React.useState(false);

    const handleStartMeeting = () => {
        history.push('/chat/create');
    }

    const handleCancelMeeting = () => {
        // setCreateCallDialogOpen(false);
    }

    const handleJoinMeeting = () => {
        history.push('/chat/join');
    }

    const handleCancelJoinMeeting = () => {
        // setJoinCallDialogueOpen(false);
    }

    return(
        <div>
            <Button onClick={handleStartMeeting}>{isLoggedIn ? 'Start Meeting' : 'Login'}</Button>
            <Button onClick={handleJoinMeeting}>Join Meeting</Button>
            {/* <CreateCall open={createCallDialogOpen} handleClose={handleCancelMeeting} /> */}
            {/* <JoinCall open={joinCallDialogueOpen} handleClose={handleCancelJoinMeeting} /> */}
        </div>
    );
}

export default VideoChat;
VideoChat.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
}
