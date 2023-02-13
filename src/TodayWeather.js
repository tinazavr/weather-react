import React from "react";
import "./TodayWeather.css";
import ReactAnimatedWeather from 'react-animated-weather';


export default function TodayWeather() {
  return (
    <div className="TodayWeather">
      <div>
        <h1>Krakow</h1>
        <p>
          Thursday 14:54
          <br />
          Rain
        </p>
      </div>

      <div className="todayWeatherBox">
        <div className="temperatureToday">
          <ReactAnimatedWeather
            icon="RAIN"
            color="grey"
            size={54}
            animate={true}
          />

          <h2>
            14<span>°C</span>
          </h2>
        </div>
        <div className="parametersToday">
          <h5>Precipitation: 82%</h5>
          <h5>Wind: 4km/h</h5>
        </div>
      </div>
    </div>
  );
}
