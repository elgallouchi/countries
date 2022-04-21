import React from "react";
import { BiWorld } from "react-icons/bi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleAlert = async () => {
    const { value: formValues } = await Swal.fire({
      // title: "Search from 250 countries",
      html:
        `<input id="inputValue" class="swal2-input" placeholder="Search">` +
        `<select id="selectValue" class="swal2-input">
            <option value="" disabled selected>Search a option</option>
            <option value="name">Name</option>
            <option value="language">Language</option>
            <option value="currency">Currency</option>
            <option value="capital">Capital</option>
            <option value="continent">Continent</option>
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
      navigate(
        `/countries?q=${formValues.inputValue}&x=${formValues.selectValue}`
      );
    }
  };

  return (
    <header>
      <div className="container">
        <Link to="/">
          <BiWorld />
          <h2>Wolrd Countries</h2>
        </Link>
        <div className="menu">
          <a onClick={handleAlert}>Search</a>
          <Link to="/">Home</Link>
          <Link to="/countries">All Countries</Link>
        </div>
      </div>
    </header>
  );
}
