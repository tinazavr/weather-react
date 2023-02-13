import React from "react";
import SearchForm from "./SearchForm";
import TodayWeather from "./TodayWeather";

import "./Main.css";



export default function Main() {
  return (
    <main className="Main">
      <nav>
        <ul>
          <li>Lviv</li>
          <li>Oslo</li>
          <li>Paris</li>
          <li>Split</li>
        </ul>
      </nav>
      <SearchForm />
      <TodayWeather />
    </main>
  );
}
