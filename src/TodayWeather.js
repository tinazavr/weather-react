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
        <div className="temperatureToday"></div>
        <div className="parametersToday"></div>
      </div>
    </div>
  );
}
