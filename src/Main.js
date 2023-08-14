import React, { useState, useEffect } from "react";
import axios from "axios";

import FormattedDate from "./FormattedDate";
import Forecast from "./Forecast";
import WeatherIcon from "./WeatherIcon";
import "./Main.css";
import WeatherTemperature from "./WeatherTemperature";
import WindUnits from "./WindUnits";

// import SearchForm from "./SearchForm";
//let init = false;

export default function Main(props) {
  let navCities = ["Lviv", "Oslo", "Paris", "Split"];
  console.log(navCities[1]);

  const [city, setCity] = useState(props.default);
  const [country, setCountry] = useState("");
  const [temperature, setTemperature] = useState("--");
  const [humidity, setHumidity] = useState("--");
  const [wind, setWind] = useState("--");
  const [description, setDescription] = useState("--");
  const [date, setDate] = useState(new Date());
  let [units, setUnits] = useState("metric");
  let [icon, setIcon] = useState();
  //let [windUnits, setWindUnits] = useState("km/h");

  function onUnitsChange(unit) {
    setUnits(unit);
  }
  useEffect(() => {
    const apiKey = "80837f7b81708cf27e6991c6119a6e84";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(todayWeather);
    //getData();
  }, [units, city]);

  function todayWeather(response) {
    console.log(response);
    let cityData = response.data;
    setCity(cityData.name);
    setCountry(cityData.sys.country);
    setTemperature(Math.round(cityData.main.temp));
    setWind(Math.round(cityData.wind.speed));
    setHumidity(Math.round(cityData.main.humidity));
    setDescription(cityData.weather[0].description);
    setDate(new Date(cityData.dt * 1000));
    setIcon(cityData.weather[0].icon);
    // console.log("its", cityData.dt *1000);
  }

  // let [city, setCity] = useState(props.cityName);
  let [searchCity, setSearchCity] = useState("");

  // let [units, setUnits] = useState("metric");

  // function getData() {

  // }

  function clickedSubmit(event) {
    event.preventDefault();
    setCity(searchCity);
  }
  function changeCity(event) {
    setSearchCity(event.target.value);
  }
  return (
    <main className="Main">
      <nav className="navMenu">
        <ul>
          {navCities.map((navCity, index) => {
            if (navCities.length > 4) {
              navCities.pop();
            }
            return (
              <li
                key={index}
                onClick={() => {
                  setCity(navCity);
                }}
              >
                {navCity}
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
        <button type="button" className="currentLocationButton">
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
              <FormattedDate date={date} />
              <div className="description"> {description}</div>
            </p>
          </div>

          <div className="todayWeatherBox">
            <div className="temperatureToday">
              <WeatherIcon code={icon} alt={description} />

              <h2>
                {temperature}
                <WeatherTemperature
                  unit={units}
                  onUnitsChange={onUnitsChange}
                />
              </h2>
            </div>
            <div className="parametersToday">
              <h5>Humidity: {humidity} %</h5>

              <h5>
                Wind: {wind} <WindUnits unit={units} />
              </h5>
            </div>
          </div>
        </div>
      </div>

      <Forecast />
    </main>
  );
}
