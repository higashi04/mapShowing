import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Profile.css";

export default function Profile() {
  const [userData, setUserData] = useState("");
  const [company, setCompany] = useState("");
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate()
  const correctCapitalize = (str) => {
    const string = str.toLowerCase();
    const stringTwo = string.charAt(0).toUpperCase() + string.slice(1);
    return stringTwo;
  };
  useEffect(() => {
    setCompany(correctCapitalize(user.company))
    document.body.style.backgroundColor = "#669BC7";
    if( user === null) {
      navigate("/login")
      toast.error("Favor de Iniciar Sesión")
    } else {
      setUserData(user)
    }
  }, [user, navigate]);
  return (
    <div className="container profile-data">
      <div className="row">
        <h1>
          {userData.firstName} {userData.lastName}
        </h1>
      </div>
      <div className="row my-3">
        <div className="col-12">{userData.email}</div>
      </div>
      <div className="row my-3">
        <div className="col-6">Empresa</div>
        <div className="col-6">{company}</div>
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
