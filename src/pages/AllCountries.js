import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { IoArrowRedoCircleOutline } from "react-icons/io5";
import TableSkeleton from "../components/TableSkeleton";

export default function AllCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      if (response.status === 200) {
        setCountries(response.data);
      }
    } catch (error) {
      console.log("error ", error);
    }
  }, [countries]);

  //
  const listCountries = countries.map((country, index) => {
    return (
      <tr key={index}>
        <td>
          {country?.flags && (
            <img src={country?.flags?.svg} alt={country?.name?.common} />
          )}
        </td>
        <td>{country?.name?.common}</td>
        <td>{country?.languages && Object.values(country?.languages)[0]}</td>
        <td>{country?.capital}</td>
        <td>{country?.continents}</td>
        <td>
          <Link to={"/countries/" + country?.name?.common?.toLowerCase()}>
            <IoArrowRedoCircleOutline />
          </Link>
        </td>
      </tr>
    );
  });

  return (
    <>
      <Header />
      <section className="all-countries">
        <div className="container">
          <table>
            <thead>
              <tr>
                <th>Flag</th>
                <th>Name</th>
                <th>Language</th>
                <th>Capital</th>
                <th colSpan="2">Continent</th>
              </tr>
            </thead>
            {countries.length === 0 ? (
              <tbody>
                <TableSkeleton />
                <TableSkeleton />
                <TableSkeleton />
                <TableSkeleton />
                <TableSkeleton />
                <TableSkeleton />
                <TableSkeleton />
              </tbody>
            ) : (
              <tbody>{listCountries}</tbody>
            )}
            {/* <tfoot>
              <tr>
                <td colSpan="6">
                  {countries.length === 0 ? (
                    countries.length + " Pays"
                  ) : (
                    
                  )}
                </td>
              </tr>
            </tfoot> */}
          </table>
        </div>
      </section>
    </>
  );
}
