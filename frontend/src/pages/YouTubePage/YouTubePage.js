import React, { useState, useEffect } from 'react';
import { DATA } from '../../localData';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {KEY} from '../../localKey';

 const YouTubePage = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchVideos()
    }, []);

    const fetchVideos = async () => {
        try {
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=stranger%20things&key=${KEY}&part=snippet&maxResults=10`);
            console.log(response.data.items)
            setVideos(response.data.items)
        } catch (error) {
            console.log(error.message);   
        }
    };
    return (
        <div>
            {videos &&
            videos.map((video) => {
                return(
                    <div>
                        <p>{video.snippet.title}</p>
                        <Link to={`/video/${video.id.videoId}`}>
                            <img src={video.snippet.thumbnails.medium.url} />
                        </Link>
                    </div>
                );

            })}
        </div>
    );
 };

 export default YouTubePage;