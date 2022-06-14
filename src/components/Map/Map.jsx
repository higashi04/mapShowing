import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "98vw",
  height: "80vh",
};

const GMap = () => {
  const { user } = useSelector((state) => state.auth);
  let center;
  switch (user.company.toLowerCase()) {
    case "medline":
      center = { lat: 27.475168207475267, lng: -99.62792571125931 };
      break;
    case "oes":
      center = { lat: 27.465827083348838, lng: -99.53910737807658 };
      break;
    case "ezo":
      center = { lat: 27.471544089968063, lng: -99.63054142406126 };
      break;
    case "aistermi":
      center = { lat: 27.457094014565904, lng: -99.51961640402288 };
      break;
    case "bpi":
      center = { lat: 27.443426294145464, lng: -99.50281284374663 };
      break;
    default:
      center = { lat: 27.54452614482854, lng: -99.56006791236273 };
      break;
  }
  const route = [
    {lat: 27.471744756667643, long: -99.49815581753424}
  ]
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAP_KEY,
  });

  const [map, setMap] = useState(null);
  const onLoad = useCallback(
    function callback(map) {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      setMap(map);
    },
    [center]
  );

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);
  return (
    isLoaded && (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={center}  map={map}/>
        {route.map(item => <Marker  position={item} map={map}/>)}
      </GoogleMap>
    )
  );
};
export default GMap;
