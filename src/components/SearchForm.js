import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchForm() {
  const [search, setSearch] = useState("");
  const [option, setOption] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(search, option);
    navigate("/7845");
  };
  return (
    <div className="search-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          required
          onChange={(e) => setSearch(e.target.value)}
        />
        <select onChange={(e) => setOption(e.target.value)}>
          <option>Search by ...</option>
          <option value="name">Name</option>
          <option value="language">Language</option>
          <option value="currency">Currency</option>
          <option value="capital">Capital</option>
          <option value="continent">Continent</option>
        </select>
        <button type="submit">search</button>
      </form>
    </div>
  );
}
