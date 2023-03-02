import { React, useState } from "react";
import Header from "./components/Header";
import Map from "./components/Map";

const apiKey = process.env.REACT_APP_API_KEY;

const App = () => {
  const [formData, setFormData] = useState({ value: "", isValid: false });
  const [loading, setLoading] = useState(false);
  const [location, setlocation] = useState(null);
  const [isFetched, setIsFetched] = useState(false);
  const [coords, setCoords] = useState([null, null]);
  const [valid, setValid] = useState(true);

  const regexForIP = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/;
  const regexForDomain =
    /^[a-zA-Z0-9][a-zA-Z0-9-_]{0,61}[a-zA-Z0-9]{0,1}\.([a-zA-Z]{1,6}|[a-zA-Z0-9-]{1,30}\.[a-zA-Z]{2,3})$/;

  const handleChange = (e) => {
    const searchFieldValue = e.target.value;

    setFormData(() => {
      return {
        ...formData,
        value: searchFieldValue,
        isValid:
          regexForIP.test(searchFieldValue) ||
          regexForDomain.test(formData.value),
      };
    });
  };

  const handleSubmit = () => {
    if (formData.isValid) {
      getLocation();
    }

    setValid(formData.isValid);
  };

  const getLocation = async () => {
    setLoading(true);
    const res = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&${
        regexForIP.test(formData.value)
          ? `ipAddress=${formData.value}`
          : regexForDomain.test(formData.value)
          ? `domain=${formData.value}`
          : ""
      }`
    );
    const data = await res.json();

    setLoading(false);
    setlocation(data);
    setIsFetched(true);
    setCoords([data?.location?.lat, data?.location?.lng]);

    // ERROR HANDLING WHEN INPUTTED WRONG INFO OR API COULDNT ABLE TO FETCH INFO
    if (data.code >= 400) {
      setIsFetched(false);
    }
  };

  return (
    <div className="main">
      <Header
        value={formData.value}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        locationData={location}
        isFetched={isFetched}
        isLoading={loading}
        isInvalid={!valid}
      />

      <Map lat={coords[0]} lng={coords[1]} />
    </div>
  );
};

export default App;
