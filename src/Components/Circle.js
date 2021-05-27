import React from "react";
import "./Circle.css";
import Youtube from "../Resources/youtube.svg";
import Gmail from "../Resources/email.svg";
import Translate from "../Resources/translate.svg";
import Maps from "../Resources/map.svg";
import Add from "../Resources/add.svg";

export default function Circle(props) {
  let site = "";

  if (props.nome === "Youtube") {
    site = Youtube;
  } else if (props.nome === "Gmail") {
    site = Gmail;
  } else if (props.nome === "Translate") {
    site = Translate;
  } else if (props.nome === "Maps") {
    site = Maps;
  } else {
    site = Add;
  }

  return (
    <div className="circle-container">
      <div className="circle-content">
        <div className="circle">
          <img src={site} alt="site" className="circle-logos"></img>
        </div>
        <h1>{props.nome}</h1>
      </div>
    </div>
  );
}
