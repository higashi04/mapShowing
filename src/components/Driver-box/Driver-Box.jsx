import React from "react";
import "./Driver-box.css";
import { Link } from "react-router-dom";

const DriverBox = (props) => {
  return (
    <div className="container driver-container mx-5" >
      <div className="row mx-3">
        <div className="col-6 driver-col">Nombre:</div>
        <div className="col-6 driver-col">{props.name}</div>
      </div>
      <div className="row mt-3 driver-container-row">
        <Link to={`/choferes/${props.id}`} className="btn btn-info btn-custom">Ver datos</Link>
      </div>
    </div>
  );
};

export default DriverBox;
