import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {KEY} from '../../localKey';

 const YouTubePage = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchVideos()
    }, {});

    const fetchVideos = async () => {
        try {
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=stranger things&key=${KEY}&part=snippet&maxResults=10`);
            console.log(response.data)
            setVideos(response.data)
        } catch (error) {
            console.log(error.message)
            
        }
    }
 }