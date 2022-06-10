import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import MapView from "../../components/MapBio/MapView";

export default function BusRoute() {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth);
//   const [state, setState] = useState({
//     longitude: 0,
//     latitude: 0,
//   });
  useEffect(() => {
    document.body.style.backgroundColor = "#669BC7";
    if(user === null) {
      navigate("/login")
      toast.error("Favor de iniciar sesión.");
    }
  });
  return (
    <div className="container">
      BusRoute
      <div className="mt-5 pt-5" id="map">
        <MapView />
      </div>
    </div>
  );
}
