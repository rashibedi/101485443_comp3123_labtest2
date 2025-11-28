import React from "react";

function SearchBar ({value, onChange, onSearch}){
    const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
}

return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="type a city name"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyPress}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
}

export default SearchBar;