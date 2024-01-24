import React from "react";
import { projectID } from "./Constrains";
import { useState, useEffect } from "react";
import "../styles/App.css";

export default function Returndate({ returndate, setReturnDate }) {
  return (
    <div>
      <div className="one-way-container-child">
        <div className="from-container">
          <div className="departute-container-child">
            <span className="enter-city-from">Return</span>
            {returndate ? (
              <input type="date" className="departure-date"></input>
            ) : (
              <p className="return-date" onClick={() => setReturnDate(true)}>
                Click to add a return flight for better discounts
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
