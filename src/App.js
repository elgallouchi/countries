import Landing from "./pages/Country";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllCountries from "./pages/AllCountries";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:name" element={<Landing />}></Route>
        <Route path="/countries" element={<AllCountries />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
