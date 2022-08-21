import React, { useState, useEffect } from 'react';
import {KEY} from "../../localKey";
import axios from "axios";
import {Link, useParams} from "react-router-dom";

const SearchPage = () => {
    const [videos, setVideos] = useState([]);
    const {search} = useParams();

    useEffect(() => {
        debugger
        fetchVideos();
    }, [])

    const fetchVideos = async (search) => {
        try {
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${search}&key=${KEY}`);
            console.log(response.data.items)
            setVideos(response.data.items)
        } catch (error) {
            
        }
    }
}