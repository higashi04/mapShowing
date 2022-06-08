import React from "react";
import "./DriverDataEach.css";

export default function DriverDataEach({ driver }) {
  return (
    <div className="container driverData">
      <div className="row my-3 driverDataRow">
        <h1 className="offset-md-4"> {driver.name}</h1>
      </div>
      <div className="row my-3 driverDataRow">
        <div className="col-6">Teléfono</div>
        <div className="col-6">{driver.phone}</div>
      </div>
      <div className="row my-3 driverDataRow">
        <div className="col-6">Coordinador</div>
        <div className="col-6">{driver.coordinator}</div>
      </div>
      <div className="row my-3 driverDataRow">
        <div className="col-6">Dirección</div>
        <div className="col-6">{driver.address}</div>
      </div>
      <div className="row my-3 driverDataRow">
        <div className="col-6">IMSS</div>
        <div className="col-6">{driver.imss}</div>
      </div>
      <div className="row my-3 driverDataRow"></div>
      <hr />
      <div className="row my-3 driverDataRow">
        {/* <div className="col-6">Unidad</div> */}
        {/* <div className="col-6"> {driver.bus.unidad} </div> */}
      </div>
    </div>
  );
}
