import React from "react";
import { MapContainer, TileLayer, Popup } from "react-leaflet";
import MapPointer from '../../assets/geo-alt-fill.svg'
import { Marker } from "react-leaflet";
import { Icon } from "leaflet";
import { useSelector } from "react-redux";
import "leaflet/dist/leaflet.css";

const icon = new Icon({
  iconUrl: MapPointer,
  iconSize: [25, 25]
})
const coordinates = {
  tvilla: [27.54760752232738, -99.56012727590763],
}

const MapView = () => {
  const { user } = useSelector((state) => state.auth);
  let center;
  switch (user.company.toLowerCase()) {
    case "medline":
      center = [27.475168207475267, -99.62792571125931]
      break;
    case "oes":
      center = [27.465827083348838, -99.53910737807658]
      break;
    case "ezo":
      center = [27.471544089968063, -99.63054142406126]
      break;
    case "aistermi":
      center = [27.457094014565904, -99.51961640402288]
      break;
    case "bpi":
      center = [27.443426294145464, -99.50281284374663]
      break;
    default:
      break;
  }
  return (
    <MapContainer
      center={center}
      zoom={14}
      scrollWheelZoom={false}
      style={{ height: "80vh", width: "98vw" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center} icon={icon}>
        <Popup>
        {user.company}
        </Popup>
      </Marker>
      <Marker position={coordinates.tvilla} icon={icon}>
        <Popup>
          Transporte Villarreal
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapView;
