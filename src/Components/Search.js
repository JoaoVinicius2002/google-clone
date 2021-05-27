import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import "./Search.css";

export default function Search(props) {
  return (
    <div className="search-container">
      <div className="search-content">
        <FontAwesomeIcon icon={faSearch} className="icon-search" />
        <input
          className="search-input"
          placeholder="Pesquise no Google ou digite uma URL"
        />
        <FontAwesomeIcon icon={faMicrophone} className="icon-micro" />
      </div>
    </div>
  );
}
