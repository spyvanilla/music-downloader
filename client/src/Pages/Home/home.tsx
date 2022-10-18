import React from 'react';
import {useState,useEffect} from 'react';

import Loading from '../../Components/Loading';
import DisplayVideos from '../../Components/DisplayVideos';
import DownloadVideo from '../../Components/DownloadVideo';

import './home.css';

function Home() {
    const [searchQuery,setSearchQuery] = useState('');
    const [videos,setVideos] = useState<any>(null);
    const [chosenVideo,setChosenVideo] = useState<any>(null);
    const [loading,setLoading] = useState(false);

    const handleSubmit = (event: any) => {
        event.preventDefault();

        if (searchQuery.length > 0) {
            setLoading(true);

            fetch(`/api/search/${searchQuery}`)
            .then(response => response.json())
            .then(data => {
                console.log(data.items);
                setVideos(data.items);
                setLoading(false);
            });
        }
    }

    useEffect(() => {
        if (chosenVideo) {
            setLoading(false);
        }
    },[chosenVideo])

    return (
        <>
        <h1>Music Downloader</h1>
        <p>Search for songs you like and download them</p>
        <form onSubmit={handleSubmit} id="search-bar">
            <input type="text" value={searchQuery} onChange={event => setSearchQuery(event.target.value)}></input>
            <input type="submit" value="Search"></input>
        </form>
        {!loading ? (
            <>
            {videos === null ? '' : (
                <>
                {chosenVideo === null ? <DisplayVideos videos={videos} setChosenVideo={setChosenVideo} setLoading={setLoading} /> : <DownloadVideo chosenVideo={chosenVideo} setChosenVideo={setChosenVideo} />}
                </>
            )}
            </>
        ) : <Loading />}
        </>
    )
}

export default Home;