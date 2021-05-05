import React from 'react';
import PropTypes from 'prop-types';
const MediaDisplay = (props) => {
    const { localId, remoteId } = props;

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
            <video id={localId.slice(1)} playsInline muted autoPlay></video>
            <video id={remoteId.slice(1)} playsInline autoPlay></video>
        </div>
    );
}

export default MediaDisplay;
MediaDisplay.propTypes = {
    localId: PropTypes.string,
    remoteId: PropTypes.string
}
