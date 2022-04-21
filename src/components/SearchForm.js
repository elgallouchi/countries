import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchForm() {
  const [optionValue, setOptionValue] = useState("");
  const [optionKey, setOptionKey] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(optionValue, optionKey);
    navigate(`/countries?q=${optionKey}&x=${optionValue}`);
  };
  return (
    <div className="search-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          required
          onChange={(e) => setOptionValue(e.target.value)}
        />
        <select onChange={(e) => setOptionKey(e.target.value)}>
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
