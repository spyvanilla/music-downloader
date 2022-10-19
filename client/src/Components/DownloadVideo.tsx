import React from 'react';

import Axios from 'axios';
import fileDownload from 'js-file-download';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';

function DownloadVideo({chosenVideo, setChosenVideo} : {chosenVideo: any, setChosenVideo: React.Dispatch<any>}) {
    const handleClick = () => {
        Axios.get(`http://localhost:5003/${chosenVideo.title}.mp3`, {responseType: 'blob'})
        .then(response => fileDownload(response.data, `${chosenVideo.title}.mp3`))
    }

    return (
        <div className="download-video" style={{marginTop: "50px"}}>
            <img src={chosenVideo.image} alt={chosenVideo.title} className="video-image"></img>
            <h3>{chosenVideo.title}</h3>
            <a href={chosenVideo.href} target="_blank" rel="noreferrer" className="open-video"><i><FontAwesomeIcon icon={faYoutube} /></i> Open video</a>
            <button onClick={handleClick} id="download-button">{<FontAwesomeIcon icon={faDownload} />}</button>
            <button onClick={() => setChosenVideo(null)} id="cancel-button">Cancel</button>
        </div>
    )
}

export default DownloadVideo;