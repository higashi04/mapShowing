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
import Vacancies from "./pages/Vacancies/Vacancies";
import Servicio from "./pages/Branches/Servicio";
import Safety from "./pages/Safety/Safety";
import Error404 from "./pages/404/Error404";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navibar />}>
          <Route index element={<Body />} />
          <Route path='contacto' element={<Contacto/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='vacantes' element={<Vacancies/>}/>
          <Route path="servicio" element={<Servicio/>} />
          <Route path="seguridad" element={<Safety/>} />
          <Route path="*" element={<Error404/>}/>
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
