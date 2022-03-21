import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import axios from "axios";

export default function Landing() {
  const [data, setData] = useState([]);
  const [countryData, setCountryData] = useState({});

  // get data on mount component
  useEffect(async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    if (response.status === 200) {
      const country = countryRandom(response.data);
      setCountryData(country);
      console.log(country);
    } else {
      alert("error get data");
    }
  }, []);

  // get random country
  const countryRandom = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  return (
    <main>
      <Header />
      <div className="container">
        {countryData && (
          // top
          <div className="country">
            <div className="name">
              <div className="flag">
                <img src={countryData.flags?.png} alt="" />
                <h3>{countryData.translations?.fra?.common}</h3>
              </div>
              <div className="info">
                <p>
                  <label>Les Languages</label>
                  <span>English / Francais</span>
                </p>
                <p>
                  <label>La Capitale</label>
                  <span>Kingston</span>
                </p>
                <p>
                  <label>La Population</label>
                  <span>324 650</span>
                </p>
              </div>
            </div>
            <div className="georaphy">
              <p>
                <label>Le Continent</label>
                <span>Afrique</span>
              </p>
              <p>
                <label>La Surface</label>
                <span>Afrique</span>
              </p>
              <p>
                <label>La Region</label>
                <span>Afrique</span>
              </p>
              <p>
                <label>Latitude / Langitude</label>
                <span>-11.3 / 22</span>
              </p>
              <p>
                <label>Les Frontiers</label>
                <span>france espagne italie</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
