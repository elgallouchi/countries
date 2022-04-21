import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useCountries() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState("");

  // get all countries
  useEffect(async () => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/all`);
      if (response.status === 200) {
        await setCountries(response.data);
      }
    } catch (error) {
      setError("No data received");
    }
  }, [countries]);

  // get countries by name
  const getByName = async (countryName) => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
      );
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      return "No data received";
    }
  };

  // gey by form option
  const getByOption = async (optionKey, optionValue) => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/${optionKey}/${optionValue}`
      );
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      return "No data received";
    }
  };

  return {
    error,
    countries,
    getByName,
    getByOption,
  };
}
