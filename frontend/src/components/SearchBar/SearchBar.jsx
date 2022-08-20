import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import SearchPage from "../../pages/SearchPage/SearchPage";

const SearchBar = (props) => {
    const [search, addSearch] = useState();

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        const encoded = encodeURIComponent(search);
        navigate(`/search/${search}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="search" value={search} onChange={(event) => addSearch(event.target.value)} />
            <button>Search</button>
        </form>
    );
};

export default SearchBar;