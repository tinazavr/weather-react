import React from "react";
import SearchForm from "./SearchForm";
import TodayWeather from "./TodayWeather";
import Forecast from "./Forecast";

import "./Main.css";



export default function Main() {
  let navCities = ['Lviv', 'Oslo', 'Paris', 'Split'];

  return (
    <main className="Main">
      <nav>
        <ul>
          {navCities.map(function (city){
            return <div className = 'navCities'>
              <li>{city}</li>
              </div>
          })}
       
        </ul>
      </nav>
      <SearchForm />
      <TodayWeather />
      <Forecast />
    </main>
  );
}
