import React from "react";

export default function SearchForm() {
  return (
    <div className="search-form">
      <form>
        <input type="text" placeholder="Search..." required />
        <select name="" id="">
          <option defaultValue>Search by ...</option>
          <option value="">Name</option>
          <option value="">Language</option>
          <option value="">Currency</option>
          <option value="">Capital</option>
          <option value="">Continent</option>
        </select>
        <button type="submit">search</button>
      </form>
    </div>
  );
}
