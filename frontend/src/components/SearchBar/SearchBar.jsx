import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchPage from "../../pages/SearchPage/SearchPage";

const SearchBar = (props) => {
  const [search, updateSearch] = useState();

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const encoded = encodeURIComponent(search);
    navigate(`/search/${search}`);
  }

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          value={search}
          onChange={(event) => updateSearch(event.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
