import React from "react";
import "./Sites.css";
import Circle from "./Circle";

export default function Sites() {
  return (
    <div className="sites-container">
      <Circle nome='Youtube'/>
      <Circle nome='Gmail'/>
      <Circle nome='Translate'/>
      <Circle nome='Maps'/>
      <Circle nome='Add atalho'/>
    </div>
  );
}
