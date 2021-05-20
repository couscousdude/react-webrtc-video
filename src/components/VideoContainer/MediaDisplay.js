import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

const MediaDisplay = (props) => {
    const { localStream, remoteStream } = props;

    React.useEffect(() => {
        // let remoteStream = document.querySelector('#remoteVideo').srcObject;
        // let localStream = document.querySelector('#localVideo').srcObject;

        // if (remoteTracks && !remoteStream) {
        //     remoteTracks
        //         .forEach(track => {
        //             remoteStream.srcObject.addTrack(track);
        //         })
        // }
        // console.log(localStream);
        // localStream.onaddtrack = e => {
        //     console.log('hi');
        // }
        // remoteStream.onaddtrack = e => {
        //     console.log('remote stream track added')
        // }
        // return (
        //     localStream.removeEventListener('addtrack')
        // )
    }, []);

    return (
        <div>
            {/* <video id={localId.slice(1)} playsInline muted autoPlay></video> */}
            {/* <video id={remoteId.slice(1)} playsInline autoPlay></video> */}
            <ReactPlayer 
                url={localStream} 
                width='100%' 
                height='100vh' 
                playsinline 
                playing={true}
                muted
            />
            <ReactPlayer
                url={remoteStream}
                playsinline
                playing={true}
            />
        </div>
    );
}

export default MediaDisplay;

MediaDisplay.propTypes = {
    localStream: PropTypes.object,
    remoteStream: PropTypes.object
}
