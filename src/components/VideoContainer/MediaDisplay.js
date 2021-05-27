import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    'playerWrapper': {
        position: 'relative',
        paddingTop: '56.25%'
    },
    reactPlayer: {
        position: 'absolute', 
        top: 0,
        left: 0
    },
    'root': {
        overflowY: 'hidden'
    }
}));

const MediaDisplay = (props) => {
    const { localStream, remoteStream } = props;
    const classes = useStyles();

    // React.useEffect(() => {

    // }, []);

    return (
        <div className={classes.root}>
            {/* <video id={localId.slice(1)} playsInline muted autoPlay></video> */}
            {/* <video id={remoteId.slice(1)} playsInline autoPlay></video> */}
            <Grid container>
                <Grid item xl={6} lg={6} md={6}>
                    <div className={classes.playerWrapper}>
                        <ReactPlayer 
                            url={localStream} 
                            width='100%' 
                            height='100%' 
                            playsinline 
                            playing={true}
                            muted
                            className={classes.reactPlayer}
                        />
                    </div>
                </Grid>
                <Grid item xl={6} lg={6} md={6}>
                <div className={classes.playerWrapper}>
                    <ReactPlayer
                        url={remoteStream}
                        playsinline
                        width='100%'
                        height='100%'
                        playing={true}
                        className={classes.reactPlayer}
                    />
                </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default MediaDisplay;

MediaDisplay.propTypes = {
    localStream: PropTypes.object,
    remoteStream: PropTypes.object
}
