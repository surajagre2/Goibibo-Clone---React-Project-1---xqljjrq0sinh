import React from "react";
import "../styles/App.css";
import { useState, useEffect,useContext  } from "react";
import { useNavigate} from "react-router-dom";
import MyContext from "../AllContext";
import { projectID } from "./Constrains";

export default function FlightSearchButton() {
  const navigate=useNavigate();
  const {fromcity,tocity,date,flightSearchData,setFlightSearchData,fromIATACode,setfromIATACode,
    toIATACode,setToIATACode}=useContext(MyContext);
  async function searchFlight()
  {
      console.log(fromIATACode);
      console.log(toIATACode);
      const response = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/flight?search={"source":"${fromIATACode}","destination":"${toIATACode}"}&day=Mon`, {
      method: "GET",
      headers: {
        projectID: projectID,
        "Content-Type": "application/json",
      },
    });
    let data=await response.json();
    setFlightSearchData(data.data.flights);
    console.log(data.data.flights);
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
