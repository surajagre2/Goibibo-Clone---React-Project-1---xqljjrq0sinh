import React from 'react'
import FlightNavbar from './FlightNavbar'
import "../styles/App.css";
import "../styles/searchflight.css"
import { projectID,searchFlightURLData } from "./Constrains";
import Flights from './Flights';

export default function SearchFlight() {
  const data=searchFlightURLData.data.flights;
  return (
    <div>
       <FlightNavbar/>
       {
         data.map((item,i)=>
          <Flights {...item}/>
         )
       }
    </div>
  )
}
