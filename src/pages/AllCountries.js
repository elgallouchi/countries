import { Link, useSearchParams, useLocation } from "react-router-dom";
import Header from "../components/Header";
import { IoArrowRedoCircleOutline } from "react-icons/io5";
import TableSkeleton from "../components/TableSkeleton";
import useCountries from "../hooks/useCountries";
import { useEffect, useState } from "react";
import { BlackList } from "../utils/BlackList";

export default function AllCountries(props) {
  const { getAll, getByOption } = useCountries();
  const [countries, setCountries] = useState([]);
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [urlValue, setUrlValue] = useState("");
  const [urlKey, setUrlKey] = useState("");

  useEffect(async () => {
    setLoading(true);
    const key = searchParams.get("q");
    const value = searchParams.get("v");

    if (key !== null && value !== null) {
      const response = await getByOption(key, value);
      if (Array.isArray(response)) {
        const res = await BlackList(response);

        setCountries(res);
        setUrlValue(value);
        setUrlKey(key);
        setError("");
      } else {
        setError(response);
      }
      setLoading(false);
    } else {
      const response = await getAll();
      if (Array.isArray(response)) {
        const res = await BlackList(response);
        setCountries(res);
        setUrlValue("");
        setUrlKey("");
        setError("");
      } else {
        setError(res);
      }
      setLoading(false);
    }
  }, [location]);

  const listCountries = countries.map((country, index) => {
    return (
      <tr key={index}>
        <td>
          {/* <span> */}
          {country?.flags && (
            <img src={country?.flags?.svg} alt={country?.name?.common} />
          )}
          {/* </span> */}
        </td>
        <td>
          <Link
            to={"/countries/" + country?.name?.common?.toLowerCase()}
            className="country-name"
          >
            {country?.name?.common.length > 21
              ? country?.name?.common.slice(0, 21).concat(" ...")
              : country?.name?.common}
          </Link>
        </td>
        <td>{country?.languages && Object.values(country?.languages)[0]}</td>
        <td>{country?.capital}</td>
        <td>{country?.continents}</td>
        {/* <td>
          <Link to={"/countries/" + country?.name?.common?.toLowerCase()}>
            <IoArrowRedoCircleOutline />
          </Link>
        </td> */}
      </tr>
    );
  });

  return (
    <>
      <Header />
      <section className="all-countries">
        <div className="container">
          {error ? (
            <div
              className="error"
              style={{
                border: "1px solid #f5c6cb",
                borderRadius: ".25rem",
                padding: ".75rem 1.25rem",
                color: "#721c24",
                background: "#f8d7da",
              }}
            >
              {error}
            </div>
          ) : (
            <>
              {countries.length !== 0 && (
                <h2 style={{ padding: "1rem 0", color: "#550055" }}>
                  We found {countries && countries.length}{" "}
                  {countries.length > 1 ? ` countries` : "country"}
                  {urlValue
                    ? ` with ${
                        urlKey == "lang" ? "language" : urlKey
                      } as ${urlValue}.`
                    : "."}
                </h2>
              )}
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
                {loading ? (
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
              </table>
            </>
          )}
        </div>
      </section>
    </>
  );
}
