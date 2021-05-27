import { IconButton } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';
import React from 'react';

const MuteButton = () => {
    const [muted, setMuted] = React.useState(false);

    const handleClicked = () => {
        setMuted(!muted);
    }

    const MuteIcon = () => {
        if (muted) {
            return (
                <MicOffIcon />
            )
        } else {
            return (
                <MicIcon />
            )
        }
    }
    
    return (
        <IconButton 
            color="primary" 
            aria-label="mute"
            onClick={handleClicked}
        >
            <MuteIcon />
            {/* <MicOffIcon /> */}
        </IconButton>    
    );      
}

export default MuteButton;