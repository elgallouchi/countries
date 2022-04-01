import React from "react";
import { BiWorld } from "react-icons/bi";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <div className="container">
        <Link to="/home">
          <BiWorld />
          <h2>Wolrd Countries</h2>
        </Link>
        <div className="menu">
          <Link to="/">accueil</Link>
          <Link to="/home">home</Link>
          <Link to="/countries">countries</Link>
        </div>
      </div>
    </header>
  );
}
