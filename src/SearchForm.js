import React, {useState} from "react";
import "./SearchForm.css";

export default function SearchForm() {
  let [city, setCity]=useState('Krakow');

  function clickedSubmit (event){
    event.preventDefault();
    alert(`search for ${city}`);
  }
  function changeCity(event){
  setCity(event.target.value);
  }
  return (
    <form className="SearchForm" onSubmit = {clickedSubmit}>
      <input
        type="search"
        autocomblete="off"
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
  );
}
