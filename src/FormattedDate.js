import React from "react";

export default function FormattedDate(props) {
  
  let dayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = dayOfWeek[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  if(minutes < 10){
minutes = `0${minutes}`
  }
   if (hours < 10) {
     hours = `0${hours}`;
   }
  return (
    <div className="FormattedDate">
      {day} {hours}:{minutes};
    </div>
  );
}
