import { React } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import MarkerComp from "./MarkerComp";

const Map = ({ lat, lng }) => {
  return (
    <div id="map">
      <MapContainer
        center={[lat ? lat : "00", lng ? lng : "00"]}
        zoom={10}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerComp lat={lat} lng={lng} />
      </MapContainer>
    </div>
  );
};

export default Map;
