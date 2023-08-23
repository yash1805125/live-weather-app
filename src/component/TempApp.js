import React, { useEffect, useState } from "react";
import "./TempApp.css";

const TempApp = () => {
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("Mumbai");
  const [allData, setAllData] = useState();

  useEffect(
    function () {
      const fetchApi = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=88d9f24a99971e5bae3019233de2eda1`;
        const response = await fetch(url);
        //   console.log(response);
        const jsondata = await response.json();
        console.log(jsondata);
        setCity(jsondata.main);
        setAllData(jsondata);
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
          placeholder="Enter a city"
          value={search}
          className="inputfield"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>

      {!city ? (
        <p className="location-info">No Data Found</p>
      ) : (
        <div className="location-info">
          <h2 className="location">{search}</h2>
          <h1 className="temp">{city.temp}°Cel</h1>

          <h3>
            Min:- {city.temp_min}°Cel | Max:- {city.temp_max}°Cel
          </h3>
          <h4 style={{ color: "" }}>Feels Like: {city.feels_like}°Cel</h4>
          <div className="flex-fix">
            <div>
              <h3>Weather: {allData.weather[0].description}</h3>
              <h3>Humidity: {allData.main.humidity}%</h3>
            </div>
            <div>
              <h3>Wind: {allData.wind.speed * 3.6} Kmph</h3>
              <h3>Visibility: {allData.visibility / 1000} Km</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TempApp;
