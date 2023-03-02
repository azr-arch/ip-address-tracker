import React, { useEffect } from "react";
import { Marker, useMap } from "react-leaflet";
import icon from "../icon-location.svg";
import L from "leaflet";

const MarkerComp = ({ lat, lng }) => {
  const map = useMap();
  const position = [lat ? lat : 22.647051, lng ? lng : 88.431686];

  useEffect(() => {
    map.flyTo(position, 10, {
      animate: true,
    });
  }, [map, position]);

  return (
    <>
      <Marker
        icon={L.icon({
          iconUrl: icon,
          iconSize: [32, 40],
          iconAnchor: [15, 46],
        })}
        position={[position[0], position[1]]}
      ></Marker>
    </>
  );
};

export default MarkerComp;
