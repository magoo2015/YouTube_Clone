import React, { useState, useEffect } from 'react';
import  {useParams} from "react-router-dom";
import { KEY } from "../../localKey";
import axios from 'axios';
//import { Link } from 'react-router-dom';

const VideoPage = (props) => {
    const {videoid} = useParams();
    console.log(videoid)
    const [relatedVideos, setRelatedVideos] = useState([]);
   

    async function getRelatedVideos(id) {
        try {
            let response = await axios.get(
                `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${id}&type=video&key=${KEY}&part=snippet&maxResults=8`);
                setRelatedVideos(response.data.items);
        } catch (error) {
            console.log(error.message);
            
        }
    }

    useEffect(() => {
        getRelatedVideos(videoid);
     },[]);

return (
    <div className='video-page'>
        <div>
        <iframe
            id="ytplayer"
            type="text/html"
            title="myVideo"
            width="640"
            height="360"
            src={`https://www.youtube.com/embed/${videoid}?autoplay=1`}
          ></iframe>
        </div>

    </div>
)

   
}

export default VideoPage;