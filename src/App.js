import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
//components
import Navibar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
//pages
import Body from "./pages/Body/Body";
import Contacto from "./pages/Contacto/Contacto";
import About from "./pages/About/About";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navibar />}>
          <Route index element={<Body />} />
          <Route path='contacto' element={<Contacto/>}/>
          <Route path='about' element={<About/>}/>
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
