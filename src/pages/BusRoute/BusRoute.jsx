import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import MapView from "../../components/MapBio/MapView";

export default function BusRoute() {
//   const [state, setState] = useState({
//     longitude: 0,
//     latitude: 0,
//   });
  useEffect(() => {
    document.body.style.backgroundColor = "#669BC7";
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
