import React from 'react';
import PropTypes from 'prop-types';
const MediaDisplay = (props) => {
    const { openMedia, remoteTracks } = props;

    // React.useEffect(() => {
    //     let remoteStream = document.querySelector('#remoteVideo').srcObject;
    //     let localStream = document.querySelector('#localVideo').srcObject;

    //     if (remoteTracks && !remoteStream) {
    //         remoteTracks
    //             .forEach(track => {
    //                 remoteStream.srcObject.addTrack(track);
    //             })
    //     }
    //     console.log(localStream);
    // });

    return (
        <div>
            <video id='localVideo' playsInline muted autoPlay></video>
            <video id='remoteVideo' playsInline autoPlay></video>
            <button onClick={openMedia}>open camera</button>
            <button />
        </div>
    );
}

export default MediaDisplay;
MediaDisplay.propTypes = {
    openMedia: PropTypes.func
}
