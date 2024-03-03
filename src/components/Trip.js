import React, { useContext } from "react";
import "../styles/Findcity.css";
import "../styles/App.css";
import { useState, useEffect } from "react";
import MyContext from "../AllContext";


export default function Trip() {
  const [oneWay, setOneWay] = useState(true);
  const [roundTrip, setRoundTrip] = useState(false);
  const [multiCity, setMultyTrip] = useState(false);
  const {trip,setTrip}=useContext(MyContext);
  
  function tripToggle(e) {
    let q = e.target.value;
    console.log(q);
    setTrip(q);
    if (e.target.value === "one-way") {
      setOneWay(true);
      setRoundTrip(false);
      setMultyTrip(false);
    } else if (e.target.value === "round-trip") {
      setOneWay(false);
      setRoundTrip(true);
      setMultyTrip(false);
    } else {
      setOneWay(false);
      setRoundTrip(false);
      setMultyTrip(true);
    }
  }
  useEffect(() => {
    let trip = document.getElementById("oneday");
    trip.checked = true;
  });
  return (
    <div>
      <div className="trip-container">
        <div className={`trip-container-child ${oneWay ? "trip-toggle" : ""}`}>
          <input
            type="radio"
            id="oneday"
            name="trip"
            value="one-way"
            onFocus={(e) => tripToggle(e)}
          />
          <label htmlFor="oneday">One-way</label>
        </div>
        <div
          className={`trip-container-child ${roundTrip ? "trip-toggle" : ""}`}
        >
          <input
            type="radio"
            id="roundtrip"
            name="trip"
            value="round-trip"
            onFocus={(e) => tripToggle(e)}
          />
          <label htmlFor="roundtrip">Round-trip</label>
        </div>
        <div
          className={`trip-container-child ${
            multiCity ? "trip-toggle-color" : ""
          }`}
        >
          <input
            type="radio"
            id="multicity"
            name="trip"
            value="multi-city"
            onFocus={(e) => tripToggle(e)}
          />
          <label htmlFor="multicity">Multi-city</label>
        </div>
      </div>
    </div>
  );
}
