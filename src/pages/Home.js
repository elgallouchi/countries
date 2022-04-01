import React from "react";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

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
            {/* <div className="form">
              <input
                type="search"
                placeholder="Search your country ..."
                required
                autoFocus
              />
              <button type="button">GO</button>
            </div> */}
            <Link to="/countries">Afficher tous les pays</Link>
          </div>

          <SearchForm />
        </div>
      </section>
      <section className="population">
        <div className="container">
          <div className="image">
            <img src="./people.svg" alt="" loading="lazy" />
          </div>
          <div className="info">
            <h3>Population</h3>
            <p>Chercher parmis les 250 pays dans le monde</p>
          </div>
        </div>
      </section>
      <section className="languages">
        <div className="container">
          <div className="image">
            <img src="./languages.svg" alt="" loading="lazy" />
          </div>
          <div className="info">
            <h3>Langues</h3>
            <p>Environ 7000 langues parlé dans le monde</p>
          </div>
        </div>
      </section>
      <section className="continents">
        <div className="container">
          <div className="image">
            <img src="./world.svg" alt="" loading="lazy" />
          </div>
          <div className="info">
            <h3>Les continents</h3>
            <p>Découvre les 7 continents sur terre</p>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="social-media">
            <a href="#" target="_blank" className="github">
              <FaGithub />
            </a>
            <a href="#" target="_blank" className="linkedin">
              <FaLinkedin />
            </a>
            <a href="#" target="_blank" className="twitter">
              <FaTwitterSquare />
            </a>
          </div>
          <p>
            Ce projet a était realisé avac la version 3.1 de{" "}
            <a href="https://restcountries.com/" target="_blank">
              restcountries
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
