import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Polyline,
} from "@react-google-maps/api";


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
    {
      id: 1,
      coordinates: { lat: 27.471744756667643, lng: -99.49815581753424 },
      label: "La casa del programador",
    },
    {
      id: 2,
      coordinates: { lat: 27.465827083348838, lng: -99.53910737807658 },
      label: "OES",
    },
    {
      id: 3,
      coordinates: { lat: 27.443426294145464, lng: -99.50281284374663 },
      label: "BPI",
    },
    {
      id: 4,
      coordinates: { lat: 27.54452614482854, lng: -99.56006791236273 },
      label: "Transporte Villarreal",
    },
    {
      id: 5,
      coordinates: { lat: 27.471544089968063, lng: -99.63054142406126 },
      label: "EZO",
    },
    {
      id: 6,
      coordinates: { lat: 28.67993999605427, lng: -100.58538300228732 },
      label: "palmitos 821",
    },
  ];
  const path = [
    { lat: 27.471744756667643, lng: -99.49815581753424 },
    { lat: 27.465827083348838, lng: -99.53910737807658 },
    { lat: 27.443426294145464, lng: -99.50281284374663 },
    { lat: 27.54452614482854, lng: -99.56006791236273 },
    { lat: 27.471544089968063, lng: -99.63054142406126 },
  ];
  const options = {
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 30000,

    zIndex: 1
  }
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
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {route.map((item) => (
          <Marker
            key={item.id}
            position={item.coordinates}
            map={map}
            label={item.label}
          />
        ))}
            <Polyline
      path={path}
      options={options}
    />
      </GoogleMap>
    )
  );
};
export default GMap;
