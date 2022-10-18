import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';

function DisplayVideos({videos, setChosenVideo, setLoading} : {videos: any, setChosenVideo: React.Dispatch<React.SetStateAction<any>>, setLoading: React.Dispatch<React.SetStateAction<boolean>>}) {
    const handleClick = (id: string, title: string, image: string, href: string) => {
        setLoading(true);
        fetch(`/api/download-video/${id}`)
        .then(() => setChosenVideo({
            title: title.replace(/&#39;/g,"'").replace(/&quot;/g,'"').replace(/&amp;/g,'&'),
            image: image,
            href: href
        }));
    }

    return (
        <div id="videos">
        {videos.map((video: any, index: number) => {
            return (
                <div className="video" key={index}>
                    <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} onClick={() => window.open(`https://www.youtube.com/watch?v=${video.id.videoId}`)} className="video-image"></img>
                    <h3>{video.snippet.title.replace(/&#39;/g,"'").replace(/&quot;/g,'"').replace(/&amp;/g,'&')}</h3>
                    <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noreferrer" className="open-video"><i><FontAwesomeIcon icon={faYoutube} /></i> Open video</a>
                    <button onClick={() => handleClick(video.id.videoId, video.snippet.title, video.snippet.thumbnails.high.url, `https://www.youtube.com/watch?v=${video.id.videoId}`)}><FontAwesomeIcon icon={faDownload} /></button>
                </div>
            )
        })}
        </div>
    )
}

export default DisplayVideos;