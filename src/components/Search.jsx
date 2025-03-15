import React, { useState } from "react";

const Search = ({ onSearch = () => {} }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      console.log("Searching for city:", city);
      onSearch(city);
    }
  };

  return (
    <div className="search-container">
      <h2>Find Weather of a City</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;


