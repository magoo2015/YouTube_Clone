import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { KEY } from '../../localKey';


const SearchPage = () => {
    
    const [videoId, setVideoID] = useState();
    const [searchTerm, setSearch] = useState();
    const [searchResults, setSearchResults] = useState([]);

    let navigate = useNavigate();

    async function searchVid(searchTerm) {
        try {
            let response = await axios.get(
                `https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${KEY}`);

        } catch (error) {
            console.log("Error in searchVid");
        }
    }
}