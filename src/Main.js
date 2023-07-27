import React, { useState } from "react";
import axios from "axios";

import ReactAnimatedWeather from "react-animated-weather";

// import TodayWeather from "./TodayWeather";
import Forecast from "./Forecast";
import "./Main.css";

// import SearchForm from "./SearchForm";

export default function Main() {
  let navCities = ["Lviv", "Oslo", "Paris", "Split"];

  const [city, setCity] = useState(navCities[0]);
  const [country, setCountry] = useState("");
  const [temperature, setTemperature] = useState("--");
  const [humidity, setHumidity] = useState("--");
  const [wind, setWind] = useState("--");
  const [description, setDescription] = useState("--");

  function todayWeather(response) {
    let cityData = response.data;

    setCity(cityData.name);
    setCountry(cityData.sys.country);
    setTemperature(Math.round(cityData.main.temp));
    setWind(Math.round(cityData.wind.speed));
    setHumidity(Math.round(cityData.main.humidity));
    setDescription(cityData.weather[0].description);
  }

  // let [city, setCity] = useState(props.cityName);
  let [searchCity, setSearchCity] = useState("");

  // let [units, setUnits] = useState("metric");

  let units = "metric";
  const apiKey = "a7a523a612e01faaea696e6bde8c2ea9";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(todayWeather);

  function clickedSubmit(event) {
    event.preventDefault();
    setCity(searchCity);
    // setCity(event.target.value);
    //  alert(`search for ${city}`);
  }
  function changeCity(event) {
    setSearchCity(event.target.value);
  }

  return (
    <main className="Main">
      <nav className="navMenu">
        <ul>
          {navCities.map((city, index) => {
            if (navCities.length > 4) {
              navCities.pop();
            }
            return (
              <li
                key={index}
                onClick={() => {
                  // alert(`hello from ${city}`);
                  // <SearchForm cityName={city} />;
                  setCity(city);
                }}
              >
                {city}
              </li>
            );
          })}
        </ul>
      </nav>
      <form className="searchForm" onSubmit={clickedSubmit}>
        <input
          type="search"
          autocomplete="off"
          placeholder="The weather in which city you would like to know?"
          onChange={changeCity}
        />
        <button className="searchButton" type="submit" value="search">
          Search
        </button>
        <button type="submit" className="currentLocationButton">
          Current
        </button>
      </form>
      <div className="todayWeather">
        <div className="todayInformation">
          <div className="cityNameContainer">
            <h1>
              {city} ({country})
            </h1>
            <p>
              Thursday 14:54
              <br />
              {description}
            </p>
          </div>

          <div className="todayWeatherBox">
            <div className="temperatureToday">
              <ReactAnimatedWeather
                icon="RAIN"
                color="grey"
                size={54}
                animate={false}
              />

              <h2>
                {temperature}
                <span>°C</span>
              </h2>
            </div>
            <div className="parametersToday">
              <h5>Humidity: {humidity} %</h5>

              <h5>Wind: {wind} km/h</h5>
            </div>
          </div>
        </div>
      </div>
      {/* <SearchForm/> */}
      {/* <TodayWeather navCities={props.navCities} /> */}
      <Forecast />
    </main>
  );
}
