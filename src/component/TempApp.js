import React, { useEffect, useState } from "react";
import "./TempApp.css";

const TempApp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(
    function () {
      const fetchApi = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=88d9f24a99971e5bae3019233de2eda1`;
        const response = await fetch(url);
        //   console.log(response);
        const jsondata = await response.json();
        //   console.log(jsondata);
        setCity(jsondata.main);
      };
      fetchApi();
    },
    [search]
  );

  return (
    <div className="box">
      <div className="inputinfo">
        <input
          type="search"
          value={search}
          className="inputfield"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>

      {!city ? (
        <p>No Data Found</p>
      ) : (
        <div className="locationinfo">
          <h2 className="location">{search}</h2>
          <h1 className="temp">{city.temp}°Cel</h1>
          <h3>
            Min:- {city.temp_min}°Cel | Max:- {city.temp_max}°Cel
          </h3>
        </div>
      )}
    </div>
  );
};

export default TempApp;
