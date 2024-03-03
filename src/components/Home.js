import React, { useContext } from "react";
import "../styles/App.css";
import {useState, useEffect } from "react";
import From from "./From";
import To from "./To";
import Trip from "./Trip";
import Datee from "./Datee";
import Returndate from "./Returndate";
import TravellersClass from "./TravellersClass";
import FareType from "./FareType";
import FlightSearchButton from "./FlightSearchButton";
import FlightImage from "./FlightImage";
import FlightOffer from "./FlightOffer"
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import MyContext from "../AllContext";

export default function Home() {
  const [fromcityfocus, setFromCityFocus] = useState(false);
  const [fromcityfocus2, setFromCityFocus2] = useState(false); 
  const {registration,setRegistration,login,setLogin}=useContext(MyContext);
  return (
    <div className="home-container">
      <div>
        <h1 className="home-heading">Domestic and International Flights</h1>
      </div>
      <div className="homechild">
        <Trip/>
        <div className="one-way-container">
          <From
            fromcityfocus={fromcityfocus}
            setFromCityFocus={setFromCityFocus}
          />
          <To
            fromcityfocus={fromcityfocus}
            fromcityfocus2={fromcityfocus2}
            setFromCityFocus2={setFromCityFocus2}
          />
          <Datee fromcityfocus2={fromcityfocus2}/>
          <Returndate />
          <TravellersClass/>
        </div>
        <FareType/>
        <FlightSearchButton />
      </div>
      <FlightImage />
      <FlightOffer/>
      {registration && (
        <div className="signIn-div">
          <SignIn/>
        </div>
      )}
      {login && (
        <div className="signIn-div">
          <SignUp/>
        </div>
      )}
    </div>
  );
}
