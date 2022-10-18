import React from 'react';

import Axios from 'axios';
import fileDownload from 'js-file-download';

function DownloadVideo({chosenVideo, setChosenVideo} : {chosenVideo: any, setChosenVideo: React.Dispatch<any>}) {
    const handleClick = () => {
        Axios.get(`http://localhost:5003/${chosenVideo.title}.mp3`, {responseType: 'blob'})
        .then(response => fileDownload(response.data, `${chosenVideo.title}.mp3`))
    }

    return (
        <div className="video" style={{marginTop: "50px"}}>
            <img src={chosenVideo.image} alt={chosenVideo.title}></img>
            <a href={chosenVideo.href} target="_blank" rel="noreferrer">{chosenVideo.title}</a>
            <button onClick={handleClick}>Download</button>
            <button onClick={() => setChosenVideo(null)}>Cancel</button>
        </div>
    )
}

export default DownloadVideo;