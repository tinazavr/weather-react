import React from "react";

export default function WindUnits(props) {
  if (props.unit === "metric") {
    return <span>km/h</span>;
  } else {
    return <span>mile/h</span>;
  }
}
