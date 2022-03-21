import Landing from "./pages/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
