import React from 'react';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
// import CreateCall from './CreateCallModal';
import { useHistory } from 'react-router-dom';
import MediaDisplay from './MediaDisplay';

function VideoHomePage(props) {
    const { isLoggedIn, openUserMedia } = props;
    // const [createCallDialogOpen, setCreateCallDialogOpen] = React.useState(false);
    const history = useHistory();
    // const [joinCallDialogueOpen, setJoinCallDialogueOpen] = React.useState(false);

    const handleStartMeeting = () => {
        history.push('/chat/create');
    }

    const handleJoinMeeting = () => {
        history.push('/chat/join');
    }

    return(
        <div>
            <Button onClick={handleStartMeeting}>{isLoggedIn ? 'Start Meeting' : 'Login'}</Button>
            <Button onClick={handleJoinMeeting}>Join Meeting</Button>
        </div>
    );
}

export default VideoHomePage;
VideoHomePage.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    openUserMedia: PropTypes.func.isRequired,
}
