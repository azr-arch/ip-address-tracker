import React from "react";
import LocationItem from "./LocationItem";
import Divider from "../utils/Divider";
import { v4 as uuidv4 } from "uuid";

const LocationInfo = ({ locationData }) => {
  const locationInfo = [
    {
      key: "IP ADDRESS",
      value: locationData?.ip,
    },
    {
      key: "LOCATION",
      value:
        locationData?.location?.city +
        ", " +
        locationData?.location?.country +
        " " +
        locationData?.location?.postalCode,
    },
    {
      key: "TIMEZONE",
      value: "UTC" + locationData?.location?.timezone,
    },
    {
      key: "ISP",
      value: locationData?.isp,
    },
  ];

  const locationEl = locationInfo.map((item, i) => {
    const key = uuidv4().slice(0, 8);
    // DIVIDER AFTER EACH ELEMENT EXCEPT LAST ONE LOGIC
    if (locationData) {
      if (i === locationInfo.length - 1)
        return (
          <LocationItem key={item.key} name={item.key} value={item.value} />
        );
      else
        return (
          <>
            <LocationItem key={item.key} name={item.key} value={item.value} />
            <Divider key={key} />
          </>
        );
    } else {
      return "";
    }
  });

  return <div className="location-info-container">{locationEl}</div>;
};

export default LocationInfo;
