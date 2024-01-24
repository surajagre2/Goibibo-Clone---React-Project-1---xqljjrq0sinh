import React, { useState } from "react";
import { projectID } from "./Constrains";
import "../styles/Findcity.css";
export default function Findcity() {
  const [city, setCity] = useState();
  const [listofcity, setListOfCty] = useState();
  async function searchCity(e) {
    setCity(e.target.value);
    try {
      let url = `https://academics.newtonschool.co/api/v1/bookingportals/airport?search={"city":"${city}"}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          projectID: projectID,
          "Content-Type": "application/json",
        },
      });
      const da = await response.json();
      setListOfCty(da.data.airports);
      console.log(listofcity);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <label htmlFor="city">City</label>
      <input
        type="text"
        name="city"
        id="city"
        value={city}
        onChange={(e) => searchCity(e)}
      ></input>
      {listofcity != null && (
        <ul className="airport-list-container">
          {listofcity.map((item) => (
            <li role="presentation">
              <div className="airport-list-container-child">
                <div className="image-logo-name-container">
                  <span className="airplane-logo">
                    <img
                      src="https://gos3.ibcdn.com/flightIcon-1675492260.png"
                      alt="flight Icon"
                    />
                  </span>
                </div>
                <div className="airports-name-container">
                  <p className="airports.name-container-child">
                    <span className="autoCompleteTitle airport-name">
                      {item.city},{item.coordinates.country}&nbsp;
                    </span>
                    <span className="autoCompleteSubTitle airport-iata-code">
                      {item.iata_code}
                    </span>
                  </p>
                  <p className="airport-full-name">{item.name}</p>
                </div>
                <div className="airport-contry-container">
                  <span className="airport-IN">IN</span>
                  <span className="country-flag flag-sprt in"></span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
