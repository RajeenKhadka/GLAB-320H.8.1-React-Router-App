import { Route, Routes } from "react-router";
import Main from "./pages/Main";
import Currencies from "./pages/Currencies";
import Price from "./pages/Price";
import Nav from "./components/Nav";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/currencies" element={<Currencies />} />
          <Route path="/price/:symbol" element={<Price />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
