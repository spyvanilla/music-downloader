import React from 'react';

function DownloadVideo({chosenVideo, setChosenVideo} : {chosenVideo: any, setChosenVideo: React.Dispatch<any>}) {
    return (
        <div className="video" style={{marginTop: "50px"}}>
            <img src={chosenVideo.image} alt={chosenVideo.title}></img>
            <a href={chosenVideo.href} target="_blank" rel="noreferrer">{chosenVideo.title}</a>
            <a href={`http://localhost:5003/${chosenVideo.title}.mp3`} download={`${chosenVideo.title}.mp3`}>Download</a>
            <button onClick={() => setChosenVideo(null)}>Cancel</button>
        </div>
    )
}

export default DownloadVideo;