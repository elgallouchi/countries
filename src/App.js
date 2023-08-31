import Country from "./pages/Country";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="countries" element={<Home />} />
        <Route path="countries/country/name/:countryName" element={<Country />} />
        <Route path="countries/country/code/:countryCode" element={<Country />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
