import React from "react";
import { BiWorld } from "react-icons/bi";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <BiWorld />
          <h2>Wolrd Countries</h2>
        </Link>
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/countries">All Countries</Link>
        </div>
      </div>
    </header>
  );
}
