import React, { useContext } from "react";
import { projectID } from "./Constrains";
import { useState, useEffect } from "react";
import "../styles/App.css";
import { json } from "react-router-dom";
import MyContext from "../AllContext";

export default function To({
  fromcityfocus,
  fromcityfocus2,
  setFromCityFocus2,
})
 {
  const {tocity,setToCity,toIATACode,setToIATACode}=useContext(MyContext);
  const [listofcity2, setListOfCty] = useState();
  const [city,setCity]=useState();
  const [fullname,setFullName]=useState();
  async function searchCity2(e) {
    setToCity(e.target.value);
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
    } catch (error) {
      console.log(error);
    }
  }
  function sample(e,item) {
    setToCity(item.city);
    setFullName(item.name);
    setToIATACode(item.iata_code);
    setListOfCty(null);
  }
  function setFocusValue()
  {
    setFromCityFocus2(false);
  }
  function abc()
  {
    console.log(city);
  }
  useEffect(()=>{
    abc();
  })
  return (
    <div>
      <div className="one-way-container-child">
        <div
          className={
            fromcityfocus2 ? "from-container-focus2" : "from-container"
          }
          id={fromcityfocus ? "check" : ""}
        >
          <div
            className={
              fromcityfocus2
                ? "from-container-child-focus2"
                : "from-container-child"
            }
          >
            <span
              className={
                fromcityfocus2 ? "enter-city-from-focus2" : "enter-city-from"
              }
            >
              To
            </span>
            <input
              type="text"
              className="enter-city"
              onFocus={() => setFromCityFocus2(true)}
              onBlur={() => setFocusValue()}
              onChange={(e) => searchCity2(e)}
              placeholder="Enter city or airport"
              value={tocity}
              contentEditable="true"
            />
            {!fromcityfocus2 && <p className="airport-full-namee">{fullname}</p>}
          </div>
          {listofcity2 != null && (
            <ul className="airport-list-container">
              {listofcity2.map((item) => (
                <li onClick={(e)=>sample(e,item)}>
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
      </div>
    </div>
  );
}
