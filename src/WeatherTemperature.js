import React from "react";

export default function WeatherTemperature(props) {
  //let [unit, setUnit] = useState(props.unit);

  function temperatureToCelsius(event) {
event.preventDefault();
    props.onUnitsChange("metric");
    //setUnit("metric");
    //setWindUnits("km/h");
  }

  function temperatureToFahrenheit(event) {
    event.preventDefault();
    props.onUnitsChange("imperial");

    //setWindUnits("mile/h");
  }

  if (props.unit === "metric") {
    return (
      <div className="unitsContainer">
        <span className="temperatureCelsius">°C</span>
        <span>|</span>
        <a
          href="/"
          onClick={temperatureToFahrenheit}
          className="temperatureFahrenheit"
        >
          °F
        </a>
      </div>
    );
    // axios.get(apiUrl).then(todayWeather);
  } else {
    return (
      <div className = 'unitsContainer'>
        <a
          href="/"
          onClick={temperatureToCelsius}
          className="temperatureCelsius"
        >
          °C
        </a>
        <span>|</span>

        <span className="temperatureFahrenheit">°F</span>
      </div>
    )
    // axios.get(apiUrl).then(todayWeather);
  }
}
