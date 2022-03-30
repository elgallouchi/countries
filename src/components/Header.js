import React from "react";
import { BiWorld } from "react-icons/bi";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header>
      <div className="container">
        <Link to="/home">
          <BiWorld />
          <h2>Wolrd Countries</h2>
        </Link>
      </div>
    </header>
  );
};
