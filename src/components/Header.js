import React, { useContext } from "react";
import { BiWorld, BiSearch } from "react-icons/bi";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const handleAlert = async () => {
    const { value: formValues } = await Swal.fire({
      html:
        `<input id="inputValue" class="swal2-input" placeholder="Search">` +
        `<select id="selectValue" class="swal2-input">
            <option value="" disabled selected>Search a option</option>
            <option value="name">Name</option>
            <option value="lang">Language</option>
            <option value="currency">Currency</option>
            <option value="capital">Capital</option>
            <option value="region">Region</option>
        </select>`,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Search",
      preConfirm: () => {
        const inputValue = document.getElementById("inputValue").value;
        const selectValue = document.getElementById("selectValue").value;

        if (!inputValue || !selectValue) {
          Swal.showValidationMessage("You need to type something");
        } else {
          return {
            inputValue,
            selectValue,
          };
        }
      },
    });

    if (formValues?.inputValue && formValues?.selectValue) {
      navigate(`/?q=${formValues.selectValue}&v=${formValues.inputValue}`);
    }
  };

  return (
    <header className={theme ? "header-dark" : "header-light"}>
      <div className="container">
        <Link to="/countries/">
          <BiWorld />
          <h2>
            <span>World</span> Countries
          </h2>
        </Link>
        <div className="menu">
          <Link to="/countries/">Home</Link>
          <span onClick={handleAlert}>
            <BiSearch /> Search...
          </span>

          <button className="btn-toggle" onClick={toggleTheme}>
            {theme ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
          </button>
        </div>
      </div>
    </header>
  );
}
