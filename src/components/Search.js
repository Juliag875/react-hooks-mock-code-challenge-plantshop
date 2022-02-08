import React from "react";

function Search({search, setSearch}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => console.log("Searching...")}
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
