import { Link } from "react-router-dom";
import Header from "../components/Header";
import { IoArrowRedoCircleOutline } from "react-icons/io5";
import TableSkeleton from "../components/TableSkeleton";
import useCountries from "../hooks/useCountries";

export default function AllCountries() {
  const { countries, error } = useCountries();

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
            </table>
          )}
        </div>
      </section>
    </>
  );
}
