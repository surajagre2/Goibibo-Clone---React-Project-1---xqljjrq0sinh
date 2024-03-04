import React from "react";
import "../styles/App.css";
import { useState, useEffect,useContext  } from "react";
import { useNavigate} from "react-router-dom";
import MyContext from "../AllContext";
import { projectID,searchFlightURLData } from "./Constrains";

export default function FlightSearchButton() {
  const navigate=useNavigate();
  const {fromcity,tocity,date,flightSearchData,setFlightSearchData,fromIATACode,setfromIATACode,
    toIATACode,setToIATACode}=useContext(MyContext);
  async function searchFlight()
  {
      
      const response = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/flight?search={source:BLR,destination:DEL}&day=Wed`, {
      method: "GET",
      headers: {
        projectID: projectID,
        "Content-Type": "application/json",
      },
    });
    let data=await response.json();
    setFlightSearchData(data);
    console.log(flightSearchData);
    navigate("/search");
  }
  return (
    <div>
      <div className="search-button-container">
        <button id="search-button" onClick={()=>searchFlight()}>SEARCH FLIGHTS</button>
      </div>
    </div>
  );
}
