import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
//components
import Navibar from "./components/navbar/Navbar";
//pages
import Body from "./pages/Body";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navibar />}>
          <Route index element={<Body />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
