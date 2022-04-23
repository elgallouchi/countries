import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { IoLanguage } from "react-icons/io5";
import { FaMapMarkedAlt, FaMapSigns } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import Skeleton from "../components/Skeleton";
import useCountries from "../hooks/useCountries";
import { BlackList } from "../utils/BlackList";

export default function Country() {
  const { getByName } = useCountries();
  const [countryData, setCountryData] = useState({});
  const { countryName } = useParams();
  const navigate = useNavigate();

  // change dynamically favicon and title of page
  useEffect(async () => {
    const favicon = document.getElementById("favicon");
    favicon.href = countryData?.flags?.png;
    document.title = countryData?.name?.common;
  }, [countryData, countryName]);

  // get data on mount component
  useEffect(async () => {
    const country = await getByName(countryName);
    const response = await BlackList(country);
    console.log(country);
    if (response.length > 0) {
      setCountryData(response[0]);
    } else {
      navigate("/");
    }
  }, [countryName]);

  return (
    <>
      <Header />
      <section className="country">
        <div className="container">
          {Object.keys(countryData).length !== 0 ? (
            <>
              {/* data start */}
              <div className="country-information">
                <div className="flag">
                  <img
                    src={countryData?.flags?.png}
                    alt={countryData?.name?.common}
                    loading="lazy"
                  />
                  <div>
                    <h1>{countryData?.name?.official}</h1>
                    <h3>{countryData?.name?.common}</h3>
                  </div>
                </div>
              </div>
              <div className="country-information">
                <table>
                  <thead>
                    <tr>
                      <td colSpan="2">
                        <BiWorld /> Names
                      </td>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Common</td>
                      <td>{countryData?.name?.common}</td>
                    </tr>
                    <tr>
                      <td>Official</td>
                      <td>{countryData?.name?.official}</td>
                    </tr>
                    <tr>
                      <td>Common (Native)</td>
                      <td>
                        {countryData?.name?.nativeName &&
                          Object.values(countryData?.name?.nativeName)[0]
                            ?.common}
                      </td>
                    </tr>
                    <tr>
                      <td>Official (Native)</td>
                      <td>
                        {countryData?.name?.nativeName &&
                          Object.values(countryData?.name?.nativeName)[0]
                            ?.official}
                      </td>
                    </tr>
                    <tr>
                      <td>Translations</td>
                      <td>
                        <details>
                          <summary>translations</summary>
                          <ul>
                            {countryData?.translations &&
                              Object.entries(countryData?.translations).map(
                                (el, index) =>
                                  [
                                    "ara",
                                    "fra",
                                    "spa",
                                    "ita",
                                    "jpn",
                                    "per",
                                    "por",
                                    "kor",
                                    "rus",
                                  ].includes(el[0]) && (
                                    <li key={index}>
                                      <span>{el[0]} </span>
                                      <span>{el[1].official}</span>
                                    </li>
                                  )
                              )}
                          </ul>
                        </details>
                      </td>
                    </tr>
                  </tbody>
                  <thead>
                    <tr>
                      <td colSpan="2">
                        <IoLanguage /> Languages
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Native language</td>
                      <td>
                        {countryData?.languages &&
                          Object.values(countryData?.languages)[0]}
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="1">Languages</td>
                      <td>
                        {countryData?.languages &&
                          Object.values(countryData?.languages)
                            .slice(1)
                            .join(", ")}
                      </td>
                    </tr>
                  </tbody>
                  <thead>
                    <tr>
                      <td colSpan="2">
                        <FaMapMarkedAlt /> Geography
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Region</td>
                      <td>{countryData?.region}</td>
                    </tr>
                    <tr>
                      <td>subregion</td>
                      <td>{countryData?.subregion}</td>
                    </tr>
                    <tr>
                      <td>capital</td>
                      <td>{countryData?.capital}</td>
                    </tr>
                    <tr>
                      <td>lat/lng</td>
                      <td>
                        {countryData?.latlng && countryData?.latlng.join(", ")}
                      </td>
                    </tr>
                    <tr>
                      <td>area</td>
                      <td>
                        {countryData?.area &&
                          countryData?.area?.toLocaleString() + " Km²"}
                      </td>
                    </tr>
                    <tr>
                      <td>land borders</td>
                      <td>
                        {countryData?.borders?.map((border, index) => (
                          <>
                            <Link key={index} to={"/countries/" + border}>
                              {border}{" "}
                            </Link>
                            {", "}
                          </>
                        ))}
                      </td>
                    </tr>
                  </tbody>
                  <thead>
                    <tr>
                      <td colSpan="2">
                        <FaMapSigns /> Codes
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>alpha 2</td>
                      <td>{countryData?.cca2}</td>
                    </tr>
                    <tr>
                      <td>alpha 3</td>
                      <td>{countryData?.cca3}</td>
                    </tr>
                    <tr>
                      <td>numeric</td>
                      <td>{countryData?.ccn3}</td>
                    </tr>
                    <tr>
                      <td>International calling code</td>
                      <td>
                        {/* {countryData?.idd &&
                          countryData?.idd?.root +
                            countryData?.idd?.suffixes[0]} */}
                      </td>
                    </tr>
                    <tr>
                      <td>currency code</td>
                      <td>
                        {countryData?.currencies &&
                          Object.keys(countryData?.currencies)}
                      </td>
                    </tr>
                    <tr>
                      <td>top level domains</td>
                      <td>{countryData?.tld && countryData?.tld.join(", ")}</td>
                    </tr>
                  </tbody>
                  <thead>
                    <tr>
                      <td colSpan="2">auther</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>population</td>
                      <td>{countryData?.population?.toLocaleString()}</td>
                    </tr>
                    <tr>
                      <td>car side</td>
                      <td>{countryData?.car && countryData?.car?.side}</td>
                    </tr>
                    <tr>
                      <td>indepentent</td>
                      <td>
                        {countryData?.independent &&
                        countryData?.independent === true
                          ? "yes"
                          : countryData?.independent === false
                          ? "no"
                          : null}
                      </td>
                    </tr>
                    <tr>
                      <td>week start</td>
                      <td>
                        {countryData?.startOfWeek && countryData?.startOfWeek}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* data end */}
            </>
          ) : (
            <>
              {/* skeleton start */}
              <div className="country-information">
                <div className="flag">
                  <Skeleton width="40%" height="5rem" />
                </div>
              </div>
              <div className="country-information">
                <table>
                  <tbody>
                    <tr>
                      <td stylle={{ marginLeft: "1rem" }}>
                        <Skeleton width="40%" />
                      </td>
                      <td>
                        <Skeleton width="40%" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Skeleton width="40%" />
                      </td>
                      <td>
                        <Skeleton width="40%" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Skeleton width="40%" />
                      </td>
                      <td>
                        <Skeleton width="40%" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Skeleton width="40%" />
                      </td>
                      <td>
                        <Skeleton width="40%" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Skeleton width="40%" />
                      </td>
                      <td>
                        <Skeleton width="40%" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Skeleton width="40%" />
                      </td>
                      <td>
                        <Skeleton width="40%" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* skeleton end */}
            </>
          )}
        </div>
      </section>
    </>
  );
}
