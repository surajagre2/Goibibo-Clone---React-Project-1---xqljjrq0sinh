import React,{ useContext }  from 'react'
import "../styles/App.css";
import MyContext from "../AllContext";

export default function Flights(props) {
  const {source,destination,departureTime,arrivalTime,duration,ticketPrice}=props;
  const {fromcity,tocity}=useContext(MyContext);
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
    </div>
  )
}
