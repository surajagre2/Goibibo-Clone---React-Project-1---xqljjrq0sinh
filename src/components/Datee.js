import React, { useContext } from "react";
import { projectID } from "./Constrains";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "../styles/App.css";
import MyContext from "../AllContext";

export default function Datee({ fromcityfocus2}) {
  const {date,setDate}=useContext(MyContext);
  return (
    <div>
      <div className="one-way-container-child">
        <div className={`from-container ${fromcityfocus2 ? "check2" : ""}`}>
          <div className="departute-container-child">
            <span className="enter-city-from">Departure</span>
            <input type="date" className="departure-date" onChange={(e)=>setDate(e.target.value)} value={date}></input>
          </div>
        </div>
      </div>
    </div>
  );
}
