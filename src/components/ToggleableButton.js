import { IconButton, Button } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import MicOffIcon from '@material-ui/icons/MicOff';

const ToggleableButton = props => {
    const { onIcon, offIcon, ariaLabel, status, onToggle } = props;
    
    return (
        <IconButton 
            // color="primary" 
            aria-label={ariaLabel}
            onClick={onToggle}
        >
            {
                status
                ? offIcon
                : onIcon
            }
            {/* <MicOffIcon /> */}
        </IconButton>
        // <Button>test</Button>    
    );      
}

export default ToggleableButton;
ToggleableButton.propTypes = {
    onIcon: PropTypes.object,
    offIcon: PropTypes.object,
    ariaLabel: PropTypes.string,
    status: PropTypes.bool,
    onToggle: PropTypes.func
}
