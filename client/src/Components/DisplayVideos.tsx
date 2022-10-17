import React from 'react';

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
                    <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title}></img>
                    <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noreferrer">{video.snippet.title.replace(/&#39;/g,"'").replace(/&quot;/g,'"').replace(/&amp;/g,'&')}</a>
                    <button onClick={() => handleClick(video.id.videoId, video.snippet.title, video.snippet.thumbnails.high.url, `https://www.youtube.com/watch?v=${video.id.videoId}`)}>Get video</button>
                </div>
            )
        })}
        </div>
    )
}

export default DisplayVideos;