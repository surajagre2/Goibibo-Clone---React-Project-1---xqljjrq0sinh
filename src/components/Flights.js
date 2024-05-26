import React,{ useContext, useState }  from 'react'
import "../styles/App.css";
import MyContext from "../AllContext";
import { projectID } from './Constrains';

export default function Flights(props) {
  const {source,destination,departureTime,arrivalTime,duration,ticketPrice,flightID}=props;
  const {fromcity,tocity,fromIATACode,toIATACode,flightSearchData,setFlightSearchData}=useContext(MyContext);
  const [abd,setAbd]=useState(true);
  async function getFlightDetails()
  {
         const response = await fetch(
        `https://academics.newtonschool.co/api/v1/bookingportals/flight/{{${flightID}}`,
        {
          method: "GET",
          headers: {
            projectID: projectID,
            "Content-Type": "application/json",
          },
        })
        console.log(response);
        let data = await response.json();
        console.log(data);
  }
  return (
        <div className='flight-detail-container'>
        <p>Air India Express</p>
        <div className='flight-info'>
                <div>
                    <p>{source} {fromcity},India </p>
                    <p>{departureTime}</p>
                </div>
                <div>
                    <p>{duration}h 00m</p>
                </div>
                <div>
                    <p>{destination} {tocity},India</p>
                    <p>{arrivalTime}</p>
                </div>
                <div>
                    <p>
                        {ticketPrice}
                    </p>
                </div>
                <div>
                    <button className='view-fares'>VIEW FARES</button>
                </div>
            </div>
            <p className='flight-details' onClick={()=>getFlightDetails()}>flight Details</p>
            {abd && <div>
                {abd && <p>{flightID}</p>}
            </div>}
        </div>
  )
}
