import React, { useState, useEffect } from 'react';
import  {useParams} from "react-router-dom";
import { KEY } from "../../localKey";
import axios from 'axios';
//import { Link } from 'react-router-dom';

const VideoPage = (props) => {
    const [videos, setVideos] = useState([""]);
    const {videoId} = useParams();
  

    const fetchRelatedVideos = async (videoId) => {
        try {
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&key=${KEY}`);
            setVideos(response.data.items);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        fetchRelatedVideos();
    }, [videoId]);

    return (
            <iframe
                title="Video"
                id="ytplayer"
                type="text/html"
                width="640"
                height="360"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`}
                framebBorder="0"
            ></iframe>
    )
}

export default VideoPage;