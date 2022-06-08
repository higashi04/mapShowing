import React, { useState } from "react";
import "./DriverDataEach.css";
export default function DriverDataEach({ driver }) {
  const [isLoading, setLoading] = useState(false);

  const imgUrl = async () => {
    let url = await driver.photo.url;
    setLoading(!isLoading);
    return url;
  };

  return (
    <div className="container driverData">
      <div className="row my-3 driverDataRow">
        <h1> {driver.name}</h1>
      </div>
      <div className="row">
        {isLoading && (
          <img className="driverPhoto" src={imgUrl()} alt={driver.name} />
        )}
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
    </div>
  );
}
