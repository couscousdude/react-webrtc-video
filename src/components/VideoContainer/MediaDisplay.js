import React from 'react';

const MediaDisplay = () => {
    const [videoSrc, setVideoSrc] = React.useState(null);
    // const videoRef = React.useRef(null);

    React.useEffect(() => {
        navigator.mediaDevices.getUserMedia(
            {video: true, audio: true}, handleVideo);
        // handleVideo(stream);
    }, []);

    const openVideo = async () => {
        const stream = await navigator.mediaDevices.getUserMedia(
            {video: true, audio: true});
        handleVideo(stream);
    }

    const handleVideo = (stream) => {
        // videoRef.src = window.URL.createObjectURL(stream);
        setVideoSrc(window.URL.createObjectURL(stream));
    }

    return (
        <div>
            {/* <button onClick={() => {document.querySelector('#localVideo').srcObject = stream;}}>open video</button> */}
            <video src={videoSrc} playsInline muted autoPlay></video>
        </div>
    );
}

export default MediaDisplay;