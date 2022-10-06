import React, { useState, useEffect } from 'react';
import {KEY} from "../../localKey";
import axios from "axios";
import {Link, useParams} from "react-router-dom";

const SearchPage = () => {
    const [videos, setVideos] = useState([]);
    const {search} = useParams();

   
    const fetchVideos = async (search) => {
        try {
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${search}&key=${KEY}&part=snippet&maxResults=8`);
            console.log(response.data.items)
            setVideos(response.data.items)
        } catch (error) {
            
        }
    };
    useEffect(() => {
        fetchVideos(search);
    }, []);

    return (
        <div className='videoscontainer'>
            {videos &&
            videos.map((video) => {
                return (
                    <div className='vid' key={video.snippet.title}>
                        <p>{video.snippet.title}</p>
                        <Link to={`/video/${video.id.videoId}`}>
                            <img src={video.snippet.thumbnails.medium.url} />
                        </Link>

                    </div>
                );
            })}
        </div>
    );
}
;
export default SearchPage;