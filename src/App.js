import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
import Login from "./pages/Login/Login";
import Profile from "./pages/ProfilePage/Profile";
import Drivers from "./pages/Drivers/Drivers";
import DriverPage from "./pages/DriverPage/DriverPage";
import BusRoute from "./pages/BusRoute/BusRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Navibar />}>
              <Route index element={<Body />} />
              <Route path="contacto" element={<Contacto />} />
              <Route path="about" element={<About />} />
              <Route path="vacantes" element={<Vacancies />} />
              <Route path="servicio" element={<Servicio />} />
              <Route path="seguridad" element={<Safety />} />
              <Route path="login" element={<Login />} />
              <Route path="perfil" element={<Profile />} />
              <Route path="choferes" element={<Drivers />} />
              <Route path="choferes/:id" element={<DriverPage />} />
              <Route path="choferes/:id/ruta" element={<BusRoute />} />
              <Route path="*" element={<Error404 />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
