import React from "react";
import "../styles/App.css";
import { useState, useEffect } from "react";
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

export default function Home() {
  const [fromcityfocus, setFromCityFocus] = useState(false);
  const [fromcityfocus2, setFromCityFocus2] = useState(false);
  const [returndate, setReturnDate] = useState(false);
  const [faretype, setFareType] = useState("regular");
  const [passengerClass, setPassengerClass] = useState("economy");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [city, setCity] = useState();
  return (
    <div className="home-container">
      <h1 className="home-heading">Domestic and International Flights</h1>
      <div className="homechild">
        <Trip />
        <div className="one-way-container">
          <From
            fromcityfocus={fromcityfocus}
            setFromCityFocus={setFromCityFocus}
            city={city}
            setCity={setCity}
          />
          <To
            fromcityfocus={fromcityfocus}
            fromcityfocus2={fromcityfocus2}
            setFromCityFocus2={setFromCityFocus2}
            city={city}
            setCity={setCity}
          />
          <Datee fromcityfocus2={fromcityfocus2} />
          <Returndate returndate={returndate} setReturnDate={setReturnDate} />
          <TravellersClass
            adults={adults}
            setAdults={setAdults}
            children={children}
            setChildren={setChildren}
            infants={infants}
            setInfants={setInfants}
            passengerClass={passengerClass}
            setPassengerClass={setPassengerClass}
          />
        </div>
        <FareType faretype={faretype} setFareType={setFareType} />
        <FlightSearchButton />
      </div>
      <FlightImage />
      <FlightOffer/>
    </div>
  );
}
