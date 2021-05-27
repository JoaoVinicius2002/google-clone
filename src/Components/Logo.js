import React from "react";
import "./Logo.css";
import logo from '../Resources/logo.svg'

export default function Logo(props) {
  return (
    <div className='logo-container'>
      <img src={logo} className='logo' alt='Logo do Google'></img>
    </div>
  );
}
