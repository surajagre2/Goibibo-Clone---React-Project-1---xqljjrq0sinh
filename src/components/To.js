import React from 'react'
import { projectID } from "./Constrains";
import { useState, useEffect} from "react";
import "../styles/App.css";

export default function To({fromcityfocus,fromcityfocus2,setFromCityFocus2,city,setCity}) {
    function hello(){
        setListOfCty(null);
      }
    const [listofcity2,setListOfCty]=useState();
    async function searchCity2(e)
    {
        setCity(e.target.value);
        try {
            let url =`https://academics.newtonschool.co/api/v1/bookingportals/airport?search={"city":"${city}"}`;
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
    function hello(){
      setListOfCty(null);
    }
    function sample(e)
    {
      console.log(e);
      console.log(e.target.innerText);
    }
  return (
    <div>
      <div className="one-way-container-child">
            <div className={fromcityfocus2?"from-container-focus2":"from-container"} id={fromcityfocus?"check":""}>
                <div className={fromcityfocus2?"from-container-child-focus2":"from-container-child"}>
                  <span className={fromcityfocus2?"enter-city-from-focus2":"enter-city-from"}>To</span>
                  <input type="text" className="enter-city" onFocus={()=>setFromCityFocus2(true)} onBlur={()=>setFromCityFocus2(false)} onChange={(e)=>searchCity2(e)} placeholder="Enter city or airport"/>
                </div>
                {listofcity2!=null && <ul className="airport-list-container" onClick={()=>hello()}>
                {listofcity2.map((item)=>
                  <li>
                      <div className="airport-list-container-child">
                        <div className="image-logo-name-container">
                            <span className="airplane-logo">
                            <img src="https://gos3.ibcdn.com/flightIcon-1675492260.png" alt="flight Icon"/>
                          </span>
                        </div>
                        <div className="airports-name-container">
                            <p className="airports.name-container-child">
                              <span className="autoCompleteTitle airport-name">{item.city},{item.coordinates.country}&nbsp;</span> 
                              <span className="autoCompleteSubTitle airport-iata-code">{item.iata_code}</span>
                            </p>
                            <p className="airport-full-name">{item.name}</p>
                        </div>
                        <div className="airport-contry-container">
                          <span className="airport-IN">IN</span>
                          <span className="country-flag flag-sprt in"></span>
                        </div>
                      </div>
                  </li>
                )}
                </ul>
              }
            </div>
          </div>
    </div>
  )
}
