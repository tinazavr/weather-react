import React from "react";
import "./SearchCity.css";

export default function SearchCity() {
  return (
    <form className="SearchCity">
      <input
        type="search"
        autocomblete="off"
        placeholder="The weather in which city you would like to know?"
      />
      <button
        type="submit"
        value="search"
      >
        Search
      </button>
    </form>
  );
}
