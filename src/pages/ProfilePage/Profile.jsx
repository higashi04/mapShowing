import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./Profile.css";

export default function Profile() {
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    document.body.style.backgroundColor = "#669BC7";
  });
  return (
    <div className="container profile-data">
      <div className="row">
        <h1>
          {user.firstName} {user.lastName}
        </h1>
      </div>
      <div className="row my-3">
        <div className="col-12">{user.email}</div>
      </div>
      <div className="row my-3">
        <div className="col-6">Empresa</div>
        <div className="col-6">{user.company}</div>
      </div>
      <div className="row my-3">
        <div className="col-12 profile-notice">
          Si detecta algún error en sus datos, favor de comunicarlo usando la
          forma de contacto en esta misma aplicación.
        </div>
      </div>
    </div>
  );
}
