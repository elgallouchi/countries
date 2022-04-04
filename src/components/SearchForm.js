import React from "react";

export default function SearchForm() {
  return (
    <div className="right">
      <form>
        <input type="text" placeholder="Search..." required />
        <select name="" id="">
          <option defaultValue>Recharcher par ...</option>
          <option value="">nom</option>
          <option value="">langue</option>
          <option value="">monie</option>
          <option value="">capitale</option>
          <option value="">continent</option>
        </select>
        <button type="submit">go</button>
      </form>
    </div>
  );
}
