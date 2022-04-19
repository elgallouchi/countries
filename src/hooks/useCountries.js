import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useCountries() {
  const [countries, setAllData] = useState([]);
  const [error, setError] = useState("");

  // get all countries
  useEffect(async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      if (response.status === 200) {
        console.log("useHouk ", response);
        await setAllData(response.data);
      }
    } catch (error) {
      setError("Nous rencntrons un probléme de récupèration des données!");
    }
  }, []);
  const getByName = () => {};
  const getByLanguage = () => {};
  const getByCapital = () => {};
  const getByCurrency = () => {};
  const getByContinent = () => {};
  return {
    error,
    countries,
    getByName,
    getByLanguage,
    getByCapital,
    getByCurrency,
    getByContinent,
  };
}
