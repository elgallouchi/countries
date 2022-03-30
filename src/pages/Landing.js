import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import axios from "axios";
import { IoLanguage } from "react-icons/io5";
import { MdGroups, MdAreaChart, MdOutlineAttachMoney } from "react-icons/md";
import {
  FaMapMarkerAlt,
  FaHands,
  FaMapMarkedAlt,
  FaMapSigns,
} from "react-icons/fa";
import { BiMapPin, BiSitemap } from "react-icons/bi";
import { Ri24HoursLine } from "react-icons/ri";
import { AiOutlineCar } from "react-icons/ai";
import { BsCalendar2Week } from "react-icons/bs";
import { isoCountryCode } from "../assets/js/isoCountryCode";
import ResumeCountry from "../components/ResumeCountry";

export default function Landing() {
  const [data, setData] = useState([]);
  const [countryData, setCountryData] = useState({});
  const [countryBorders, setCountryBorders] = useState([]);

  // variables
  const continents = [
    { fr: "Océanie", en: "Oceania" },
    { fr: "Asie", en: "Asia" },
    { fr: "Afrique", en: "Africa" },
    { fr: "Europe", en: "Europe" },
    { fr: "Amérique du Nord", en: "North America" },
    { fr: "Amérique du Sud", en: "South America" },
    { fr: "Antarctique", en: "Antarctica" },
  ];

  const days = [
    { fr: "lundi", en: "monday" },
    { fr: "mardi", en: "tuesday" },
    { fr: "mercredi", en: "wednesday" },
    { fr: "jeudi", en: "thursday" },
    { fr: "vendredi", en: "friday" },
    { fr: "samedi", en: "saturday" },
    { fr: "dimanche", en: "sunday" },
  ];
  // get data on mount component
  useEffect(async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    if (response.status === 200) {
      const country = await countryRandom(response.data);
      await setCountryData(country);
      // console.log(country);
      // console.log(country.continents);
      // console.log(country.continents[0]);

      // borders countries
      if (country.borders) {
        const pays = isoCountryCode.filter((element) =>
          country.borders.includes(element.code)
        );
        setCountryBorders(pays);
      }
    } else {
      alert("error get data");
    }
  }, []);

  // get random country
  const countryRandom = async (arr) => {
    return await arr[Math.floor(Math.random() * arr.length)];
  };

  return (
    <>
      <Header />
      {countryData && (
        <div className="country">
          <div className="container">
            {/* top */}
            <div className="top">
              <div className="name">
                <div className="flag">
                  <img src={countryData?.flags?.png} alt={"drapeau "} loading="lazy" />
                  <h3>
                    <label>Nom du pays </label>
                    <span>{countryData?.translations?.fra?.common}</span>
                  </h3>
                  </div>
                  <div className="flag">
                  <p>
                    {countryData?.translations?.fra?.common && (
                      <ResumeCountry
                        nameCountry={countryData?.translations?.fra?.common}
                      />
                    )}
                  </p>
                </div>
                <div className="info">
                  <p>
                    <label>
                      <FaMapMarkerAlt /> Capitale
                    </label>
                    <span>{countryData?.capital}</span>
                  </p>
                  <p>
                    <label>
                      <IoLanguage /> Languages
                    </label>
                    <span className="languages">
                      <select name="languages">
                        {countryData?.languages &&
                          Object.values(countryData?.languages).map(
                            (el, index) => <option key={index}>{el}</option>
                          )}
                      </select>
                    </span>
                  </p>
                  <p>
                    <label>
                      <MdGroups /> Population
                    </label>
                    <span>{countryData?.population?.toLocaleString()}</span>
                  </p>
                </div>
              </div>
              <div className="geography">
                <p>
                  <label>
                    <FaMapMarkedAlt />
                    Continent
                  </label>
                  {countryData?.continents &&
                    continents.map(
                      (continent, index) =>
                        continent.en === countryData.continents[0] && (
                          <span key={index}>{continent.fr}</span>
                        )
                    )}
                </p>
                <p>
                  <label>
                    <MdAreaChart />
                    Surface
                  </label>
                  <span>
                    {countryData?.area?.toLocaleString()}{" "}
                    {countryData?.area && " KM²"}
                  </span>
                </p>
                <p>
                  <label>
                    <BiMapPin />
                    Region
                  </label>
                  <span>{countryData?.subregion}</span>
                </p>
                <p>
                  <label>
                    <FaMapSigns />
                    Latitude / Langitude
                  </label>
                  <span>{countryData?.latlng}</span>
                </p>
                <p className="borders">
                  <label>
                    <BiSitemap />
                    Frontiers avec
                  </label>
                  <span className="borders">
                    {/* <select> */}
                    {countryBorders &&
                      countryBorders.map((el, index) => (
                        <span key={index}>
                          <Link to="/">{el.name}</Link>
                        </span>
                      ))}
                    {/* </select> */}
                  </span>
                </p>
              </div>
            </div>

            {/* meduim */}
            <div className="meduim">
              <div className="left">
                <p>
                  <label>
                    <MdOutlineAttachMoney />
                    Monie
                  </label>
                  <span>
                    {countryData?.currencies &&
                      "( " +
                        Object.values(countryData?.currencies)[0].symbol +
                        " ) " +
                        Object.values(countryData?.currencies)[0].name}
                  </span>
                </p>
                <p>
                  <label>
                    <AiOutlineCar />
                    Coté conduite
                  </label>
                  <span>
                    {countryData?.car?.side === "right"
                      ? "droite"
                      : countryData?.car?.side === "left"
                      ? "gauche"
                      : null}
                  </span>
                </p>
                <p>
                  <label>
                    <BsCalendar2Week />
                    Début de semaine
                  </label>
                  <span>
                    {days.map(
                      (day, index) =>
                        day.en === countryData.startOfWeek && (
                          <span key={index}>{day.fr}</span>
                        )
                    )}
                  </span>
                </p>
                <p>
                  <label>
                    <FaHands />
                    Independance
                  </label>
                  <span>
                    {countryData?.independent &&
                    countryData?.independent === true
                      ? "Oui"
                      : countryData?.independent === false
                      ? "Non"
                      : null}
                  </span>
                </p>
              </div>
              <div className="right">
                {/* <iframe
                  src={countryData?.maps?.googleMaps}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
