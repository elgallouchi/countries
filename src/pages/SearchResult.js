import React from "react";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import { useParams } from "react-router-dom";
export default function SearchResult({ location }) {
  console.log(location);
  return (
    <div>
      <Header />
      <SearchForm />
    </div>
  );
}
