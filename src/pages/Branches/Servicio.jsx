import React, { useEffect } from "react";

import "./Servicio.css";
import trucks from "../../assets/trucks.png";
const Servicio = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#669BC7";
  });
  return (
    <>
      <h1 className="service-head">Ramas de Servicio</h1>
      <div className="container">
        <div className="row service-main">
          Ofrecemos servicio de transporte de personal tanto a:
        </div>
        <div className="row my-3">
          <div className="col-6 service-text">
            <ul>
              <li>Maquiladoras</li>
              <li>Empresas de Logística</li>
              <li>Agencias Aduanales</li>
            </ul>
          </div>
          <div className="col-6 service-text">
            <ul>
              <li>Escuelas</li>
              <li>Universidades</li>
              <li>Servicio Ejecutivo</li>
            </ul>
          </div>
        </div>
        <img className="service-img" src={trucks} alt="flotilla" />
      </div>
    </>
  );
};

export default Servicio;
