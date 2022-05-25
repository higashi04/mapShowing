import React, { useEffect } from "react";

import "./Contacto.css";

const Contacto = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#669BC7";
  });

  return (
    <>
      <h1 className="contact-title mb-5">Contacto</h1>
      <div className="container contact-box">
        <form action="" method="POST" target="_blank">
          <div className="row form-floating pb-2">
            <input
              type="text"
              name="name"
              className="form-control"
              id="user"
              placeholder="Su nombre"
              required
            />
            <label htmlFor="user">Su nombre</label>
          </div>
          <div className="row form-floating pb-2">
            <input
              type="text"
              name="name"
              className="form-control"
              id="reason"
              placeholder="Motivo"
              required
            />
            <label htmlFor="reason">Motivo</label>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contacto;
