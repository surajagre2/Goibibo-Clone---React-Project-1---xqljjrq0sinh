import React from 'react'
import "../styles/App.css";
import { useState, useEffect} from "react";

export default function FlightSearchButton() {
  return (
    <div>
       <div className="search-button-container">
          <button id="search-button">SEARCH FLIGHTS</button>
        </div>
    </div>
  )
}
