import React from "react";

const LocationItem = ({ name, value }) => {
  return (
    <div className="location-item ">
      <p className="light">{name}</p>

      <p className="bold">{value}</p>
    </div>
  );
};

export default LocationItem;
