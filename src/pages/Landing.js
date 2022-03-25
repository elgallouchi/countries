import React, { useEffect, useState } from "react";
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

export default function Landing() {
  const [data, setData] = useState([]);
  const [countryData, setCountryData] = useState({});
  const [countryBorders, setCountryBorders] = useState([]);
  // get data on mount component
  useEffect(async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    if (response.status === 200) {
      const country = await countryRandom(response.data);
      await setCountryData(country);

      // borders countries
      if (country.borders) {
        const pays = isoCountryCode.filter((code) =>
          country.borders.includes(code.code)
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

  // get borders
  // const borders = async (dataBorders) => {
  //   if (dataBorders.length > 0) {

  //     const frontiers = await dataBorders.map(async (countryCode) => {
  //       const response = await axios.get(
  //         "https://restcountries.com/v3.1/alpha/" + countryCode
  //       );
  //       console.log(response.data);
  //     });
  //   }
  // };

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
                  <img src={countryData?.flags?.png} alt={"drapeau "} />
                  <h3>
                    <label>Nom du pays </label>
                    <span>{countryData?.translations?.fra?.common}</span>
                  </h3>
                </div>
                <div className="info">
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
                      <FaMapMarkerAlt /> Capitale
                    </label>
                    <span>{countryData?.capital}</span>
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
                  <span>{countryData?.continents}</span>
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
                <p>
                  <label>
                    <BiSitemap />
                    Frontiers avec
                  </label>
                  <span className="borders">
                    {/* <select> */}
                      {countryBorders.length && (
                        countryBorders.map((el, index) => (
                          <span key={index}>{el.name}</span>
                        ))
                      )}
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
                {/* <p>
                  <label>
                    <Ri24HoursLine />
                    Fuseau horaire
                  </label>
                  <span>{countryData?.timezones}</span>
                </p> */}
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
                  <span>{countryData?.startOfWeek}</span>
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
