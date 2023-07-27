import React from "react";
import "./Forecast.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Forecast() {
  return (
    <div className="Forecast">
      <ul>
        <li>
          <h5>Fri</h5>
          <ReactAnimatedWeather
            icon="FOG"
            color="grey"
            size={48}
            animate={false}
          />
          <div>15°C</div>
        </li>
        <li>
          <h5>Sat</h5>
          <ReactAnimatedWeather
            icon="SNOW"
            color="grey"
            size={48}
            animate={false}
          />
          <div>8°C</div>
        </li>{" "}
        <li>
          <h5>Sun</h5>
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="grey"
            size={48}
            animate={false}
          />
          <div>12°C</div>
        </li>{" "}
        <li>
          <h5>Mon</h5>
          <ReactAnimatedWeather
            icon="CLOUDY"
            color="grey"
            size={48}
            animate={false}
          />
          <div>1°C</div>
        </li>
        <li>
          <h5>Tue</h5>
          <ReactAnimatedWeather
            icon="WIND"
            color="grey"
            size={48}
            animate={false}
          />
          <div>8°C</div>
        </li>
      </ul>
    </div>
  );
}
