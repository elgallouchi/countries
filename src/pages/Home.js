import React from "react";
import { Header } from "../components/Header";

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
            <div className="form">
              <input
                type="search"
                placeholder="Search your country ..."
                required
                autoFocus
              />
              <button type="button">GO</button>
            </div>
          </div>
          <div className="right"></div>
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
      <section className="options">
        <div className="container">
          <div className="box">a</div>
          <div className="box">b</div>
          <div className="box">c</div>
        </div>
      </section>
    </>
  );
}
