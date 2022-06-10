import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import MapView from "../../components/MapBio/MapView";

export default function BusRoute() {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    document.body.style.backgroundColor = "#669BC7";
    if(user === null) {
      navigate("/login")
      toast.error("Favor de iniciar sesión.");
    }
  });
  return (
    <div className="container">
      <h1 className="pt-2 ms-3">Ruta de la Unidad</h1>
      <div className="mt-3 ms-3" id="map">
        <MapView />
      </div>
    </div>
  );
}
