import React from "react";
import "./Driver-box.css";

const DriverBox = (props) => {
  return (
    <div className="container driver-container mx-3">
      <div className="row mx-3">
        <div className="col-6">Nombre:</div>
        <div className="col-6">{props.name}</div>
      </div>
    </div>
  );
};

export default DriverBox;
