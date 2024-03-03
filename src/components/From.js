import React, { useContext } from "react";
import { projectID } from "./Constrains";
import { useState, useEffect } from "react";
import "../styles/App.css";
import MyContext from "../AllContext";

export default function From({
  fromcityfocus,
  setFromCityFocus,
}) {
  const {fromcity,setFromCity,fromIATACode,setfromIATACode}=useContext(MyContext);
  const [listofcity, setListOfCty] = useState();
  const [data,setData]=useState("");
  const [city,setCity]=useState();
  const [fullname,setFullName]=useState();
  async function searchCity(e) {
    setFromCity(e.target.value);
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
  function sample(e,item) {
   
    setFromCity(item.city);
    setFullName(item.name);
    setfromIATACode(item.iata_code);
    setListOfCty(null);
  }
  function setFocusValue()
  {
    setFromCityFocus(false);
    setListOfCty(null);
  }
  useEffect(()=>{
    console.log(data);
  },[data])
  return (
    <div>
      <div className="one-way-container-child">
        <div
          className={fromcityfocus ? "from-container-focus1" : "from-container"}
        >
          <div
            className={
              fromcityfocus
                ? "from-container-child-focus1"
                : "from-container-child"
            }
          >
            <span
              className={
                fromcityfocus ? "enter-city-from-focus1" : "enter-city-from"
              }
            >
              From
            </span>
            <input
              type="text"
              className="enter-city"
              onFocus={() => setFromCityFocus(true)}
              onBlur={() => setFromCityFocus(false)}
              onChange={(e) => searchCity(e)}
              placeholder="Enter city or airport"
              value={fromcity}
            />
             {!fromcityfocus && <p className="airport-full-namee">{fullname}</p>}
          </div>
          {listofcity != null && (
            <ul className="airport-list-container">
              {listofcity.map((item) => (
                  <li onClick={(e)=>sample(e,item)}>
                  <div
                    className="airport-list-container-child"
                  >
                    <div className="image-logo-name-container">
                      <span className="airplane-logo">
                        <img
                          src="https://gos3.ibcdn.com/flightIcon-1675492260.png"
                          alt="flight Icon"
                        />
                      </span>
                    </div>
                    <div className="airports-name-container" >
                    <p className="airports.name-container-child" >
                        <span className="autoCompleteTitle airport-name">
                          {item.city},
                        </span>
                        <span className="autoCompleteSubTitle airport-iata-code">
                          {item.iata_code}
                        </span>
                      <p className="airport-full-name">{item.name}</p>
                    </p>
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
