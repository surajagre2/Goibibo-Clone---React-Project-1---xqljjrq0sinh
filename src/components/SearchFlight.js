import React from "react";
import FlightNavbar from "./FlightNavbar";
import { useState, useEffect, useContext } from "react";
import "../styles/App.css";
import "../styles/searchflight.css";
import { projectID } from "./Constrains";
import Flights from "./Flights";
import MyContext from "../AllContext";

export default function SearchFlight() {
  const { fromIATACode, toIATACode, flightSearchData, setFlightSearchData } =
    useContext(MyContext);
  const [price, setPrice] = useState(1);
  const [departure, setDeparture] = useState(1);
  const [arival, setArival] = useState(1);
  const [duration, setDuration] = useState(1);
  useEffect(() => {
    console.log("Hii");
    console.log(flightSearchData);
  });
  async function sortPrice() {
    if (price == 1) {
      setPrice(-1);
    } else {
      setPrice(1);
    }
    const response = await fetch(
      `https://academics.newtonschool.co/api/v1/bookingportals/flight?search={"source":"${fromIATACode}","destination":"${toIATACode}"}&day=Mon&sort={"price":${price}}`,
      {
        method: "GET",
        headers: {
          projectID: projectID,
          "Content-Type": "application/json",
        },
      }
    );
    let data = await response.json();
    setFlightSearchData(data.data.flights);
    console.log(data.data.flights);
  }
  async function sortDeparture() {
    if (departure == 1) {
      setDeparture(-1);
    } else {
      setDeparture(1);
    }
    const response = await fetch(
      `https://academics.newtonschool.co/api/v1/bookingportals/flight?search={"source":"${fromIATACode}","destination":"${toIATACode}"}&day=Mon&sort={"departure":${departure}}`,
      {
        method: "GET",
        headers: {
          projectID: projectID,
          "Content-Type": "application/json",
        },
      }
    );
    let data = await response.json();
    setFlightSearchData(data.data.flights);
    console.log(data.data.flights);
  }
  async function sortArival() {
    if (arival == 1) {
      setArival(-1);
    } else {
      setArival(1);
    }
    const response = await fetch(
      `https://academics.newtonschool.co/api/v1/bookingportals/flight?search={"source":"${fromIATACode}","destination":"${toIATACode}"}&day=Mon&sort={"arival":${arival}}`,
      {
        method: "GET",
        headers: {
          projectID: projectID,
          "Content-Type": "application/json",
        },
      }
    );
    let data = await response.json();
    setFlightSearchData(data.data.flights);
    console.log(data.data.flights);
  }
  async function sortDuration() {
    if (duration == 1) {
      setDuration(-1);
    } else {
      setDuration(1);
    }
    const response = await fetch(
      `https://academics.newtonschool.co/api/v1/bookingportals/flight?search={"source":"${fromIATACode}","destination":"${toIATACode}"}&day=Mon&sort={"duration":${duration}}`,
      {
        method: "GET",
        headers: {
          projectID: projectID,
          "Content-Type": "application/json",
        },
      }
    );
    let data = await response.json();
    setFlightSearchData(data.data.flights);
    console.log(data.data.flights);
  }
  return (
    <div>
      <FlightNavbar />
      <div className="flights-display">
        <div className="flights-display1">
          <div className="filters">
            <div>
              <p className="filters-head">Filters</p>
              <p className="total-flights">Showing 20 flights</p>
            </div>
            <div>
              <p className="fil-reset-btn">Reset All</p>
            </div>
          </div>
          <div className="departure">
            <p className="departure-head">Departure</p>
            <div className="depatrute-timing">
              <div>
                <p className="depatrute-timing-child">Before 6AM</p>
                <p className="depatrute-timing-child">12PM - 6PM</p>
              </div>
              <div>
                <p className="depatrute-timing-child">6AM - 12PM</p>
                <p className="depatrute-timing-child">After 6PM</p>
              </div>
            </div>
          </div>
          <div className="departure">
            <p className="departure-head">Price</p>
            <input type="range" className="price-input"></input>
          </div>
        </div>
        <div className="flights-display2">
          <div className="flight-duration">
            <div className="flight-duration-child" onClick={() => sortDeparture()}>Departure</div>
            <div className="flight-duration-child" onClick={() => sortDuration()}>Duration</div>
            <div className="flight-duration-child" onClick={() => sortArival()}>Arrival</div>
            <div className="flight-duration-child" onClick={() => sortPrice()}>
              Price
            </div>
            <div className="flight-duration-child">Best</div>
          </div>
          <div>
            {flightSearchData.map((item, i) => (
              <div>
                <Flights {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
