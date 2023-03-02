import React from "react";
import LocationInfo from "./LocationInfo";
import { MagnifyingGlass } from "react-loader-spinner";

const Header = ({
  handleChange,
  value,
  handleSubmit,
  locationData,
  isFetched,
  isLoading,
  isInvalid,
}) => {
  return (
    <div className="header">
      <img
        src="./images/pattern-bg-desktop.png"
        alt="background-poster"
        className="background-image"
      />
      <div className="header-items">
        <h2 className="header-title">IP Address Tracker</h2>
        <div
          className={`search-container ${
            isInvalid ? "invalidField" : "validField"
          }`}
        >
          <input
            type="text"
            placeholder="Search for any IP address or domain"
            id="search"
            className="searchField"
            value={value}
            onChange={(e) => handleChange(e)}
          />
          <div className="search-icon" onClick={handleSubmit}></div>
        </div>

        {/* ONLY DISPLAYING LOCATION INFO CONTAINER WHEN SEARCHING BEGINS  */}
        {isFetched && <LocationInfo locationData={locationData} />}

        {/* THIS IS FOR LOADING PURPOSE */}
        {isLoading && (
          <div className="loader-container">
            <MagnifyingGlass height="80" width="80" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
