import React from 'react';

function DisplayVideos({videos} : {videos: any}) {
    return (
        <div id="videos">
        {videos.map((video: any, index: number) => {
            return (
                <div className="video" key={index}>
                    <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title}></img>
                    <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noreferrer">{video.snippet.title.replace(/&#39;/g,"'").replace(/&quot;/g,'"')}</a>
                    <button>Download</button>
                </div>
            )
        })}
        </div>
    )
}

export default DisplayVideos;