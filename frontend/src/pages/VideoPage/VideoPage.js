import React, { useState, useEffect } from 'react';
import  {useParams} from "react-router-dom";
import { KEY } from "../../localKey";
import axios from 'axios';
//import { Link } from 'react-router-dom';


const VideoPage = () => {
    const [videos, setVideos] = useState();
    const { id } = useParams();
  
    useEffect(() => {
        fetchRelatedVideos();
    }, []);

    const fetchRelatedVideos = async () => {
        try {
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${id}&type=video&key=${KEY}`);
            setVideos(response.data.items);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div>
            <div className='videoPlayers'>
                <iframe title="videoPlayer"
                        id="ytplayer"
                        type="text/html"
                        width="640"
                        height="360" 
                        src={`https://www.youtube.com/embed/${id}`}
                        frameborder="0">
                </iframe>
            </div>
            <div className='relatedvids'>
                {videos &&
                videos.map((video) => {
                    return (
                     <div key={video.id.videoId}>
                        <p>{video.snippet.title}</p>
                        <img src={video.snippet.thumbnails.medium.url} />
                     </div>   
                    )
                })}
            </div>
        </div>
    )
}

export default VideoPage;