import React from "react";
import { projectID } from "./Constrains";
import { useState, useEffect } from "react";
import "../styles/App.css";

export default function Datee({ fromcityfocus2 }) {
  return (
    <div>
      <div className="one-way-container-child">
        <div className={`from-container ${fromcityfocus2 ? "check2" : ""}`}>
          <div className="departute-container-child">
            <span className="enter-city-from">Departure</span>
            <input type="date" className="departure-date"></input>
          </div>
        </div>
      </div>
    </div>
  );
}
