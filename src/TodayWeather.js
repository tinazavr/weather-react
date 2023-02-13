import React from "react";
import "./TodayWeather.css";

export default function TodayWeather() {
  return (
    <div className="TodayWeather">
      <div>
        <h1>Krakow</h1>
        <p>
          Thursday 14:54
          <br />
          Clouds
        </p>
      </div>

      <div className="todayWeatherBox">
        <div className="temperatureToday">
          {/* <img /> */}
          <div>
            <h2>14</h2>
            <h5>°C</h5>
          </div>{" "}
        </div>
        <div className="parametersToday">
          <h5>Precipitation: 82%</h5>
          <h5>Wind: 4km/h</h5>
        </div>
      </div>
    </div>
  );
}
