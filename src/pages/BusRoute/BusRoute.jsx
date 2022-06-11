import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import MapView from "../../components/MapBio/MapView";

export default function BusRoute() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { id } = useParams();
  const [data, setData] = useState("");

  const getBus = () => {
    const url = `https://transportes-villarreal.herokuapp.com/buses/getBuses/${id}`;
    try {
      const options = { method: "GET", url: url };
      axios
        .request(options)
        .then((res) => setData(res.data))
        .catch(function (error) {
          console.error(error);
        });
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getBus()
  })
  useEffect(() => {
    document.body.style.backgroundColor = "#669BC7";
    if (user === null) {
      navigate("/login");
      toast.error("Favor de iniciar sesión.");
    }
  });
  return (
    <div>
      <h1 className="pt-2 ms-3">Ruta de la Unidad {data.unidad}</h1>
      <div className="mt-3" id="map">
        <MapView />
      </div>
    </div>
  );
}
