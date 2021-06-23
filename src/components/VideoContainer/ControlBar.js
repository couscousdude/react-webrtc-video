import React from 'react';
import { AppBar, Button, IconButton, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ToggleableButton from '../ToggleableButton';
import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';
import VideocamOffIcon from '@material-ui/icons/VideocamOff';
import VideocamIcon from '@material-ui/icons/Videocam';

const useStyles = makeStyles({
    appbar: {
        bottom: 0

    },
    root: {
        flexGrow: 1
    },
    muteButton: {
        flex: 1
    }
});

const ControlBar = () => {
    const classes = useStyles();
    
    const [muted, setMuted] = React.useState(false);
    const [videoOn, setVideoOn] = React.useState(false);
    
    const handleMuteClick = () => {
        setMuted(!muted);
    }
    const handleVideoClick = () => {
        setVideoOn(!videoOn);
    }

    return (
        
            <div className={classes.root}>
            <AppBar 
                position='sticky'
                className={classes.appbar}
            >
                <Toolbar>
                    <ToggleableButton 
                        onIcon={<MicIcon />}
                        offIcon={<MicOffIcon />}
                        ariaLabel='mute'
                        status={muted}
                        className={classes.muteButton}
                        onToggle={handleMuteClick}
                    />
                    <ToggleableButton 
                        onIcon={<VideocamIcon />}
                        offIcon={<VideocamOffIcon />}
                        ariaLabel='video'
                        status={videoOn}
                        className={classes.muteButton}
                        onToggle={handleVideoClick}
                    />
                </Toolbar>
            </AppBar>
        </div>
        
    );
    
                
}

export default ControlBar;