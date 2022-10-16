import React from 'react';
import {useState} from 'react';

import Loading from '../../Components/Loading';
import DisplayVideos from '../../Components/DisplayVideos';

import './home.css';

function Home() {
    const [searchQuery,setSearchQuery] = useState('');
    const [videos,setVideos] = useState<any>(null);
    const [loading,setLoading] = useState(false);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        setLoading(true);

        fetch(`/api/search/${searchQuery}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.items);
            setVideos(data.items);
            setLoading(false);
        });
    }

    return (
        <>
        <h1>Music Downloader</h1>
        <h2>Search for songs you like and download them</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" value={searchQuery} onChange={event => setSearchQuery(event.target.value)}></input>
            <input type="submit" value="Search"></input>
        </form>
        {!loading ? (
            <>
            {videos === null ? '' : <DisplayVideos videos={videos} />}
            </>
        ) : <Loading />}
        </>
    )
}

export default Home;