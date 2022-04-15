import React from "react";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import { Link } from "react-router-dom";
import SearchResult from "./SearchResult";

export default function Home() {
  return (
    <>
      <Header />
      <section className="hero">
        <div className="container">
          <div className="intro">
            <h1>
              <span>
                Trouver et
                <strong> explorer</strong>
              </span>
              les information de n'import quel pays dans le monde avec une
              simple recherche
            </h1>
            <Link to="/countries">display all countries</Link>
          </div>

          <SearchForm />
        </div>
      </section>
      <SearchResult />
    </>
  );
}
