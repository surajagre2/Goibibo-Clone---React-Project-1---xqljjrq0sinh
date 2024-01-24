import React from "react";
import "../styles/App.css";
import hello from "../Asset/sponsored.png";
import poster from "../Asset/poster1.jpg";
import { useState, useEffect } from "react";
export default function FlightImage() {
  return (
    <div>
      <div className="image-section">
        <div className="image-container">
          <div className="image-container-child">
            <img src={poster} id="posterimage" alt="Image" />
            <img src={hello} id="sponsoredimage" alt="Image" />
          </div>
        </div>
      </div>
    </div>
  );
}
