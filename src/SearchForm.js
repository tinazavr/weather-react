import React from "react";
import "./SearchForm.css";

export default function SearchForm() {
  return (
    <form className="SearchForm">
      <input
        type="search"
        autocomblete="off"
        placeholder="The weather in which city you would like to know?"
      />
      <button className="searchButton" type="submit" value="search">
        Search
      </button>
      <button type="submit" className="currentLocationButton">
        Current
      </button>
    </form>
  );
}
