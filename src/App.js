import Country from "./pages/Country";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllCountries from "./pages/AllCountries";
import SearchResult from "./pages/SearchResult";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="countries" element={<AllCountries />} />
        <Route path="countries/:countryName" element={<Country />} />
        <Route path="search" element={<SearchResult />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
