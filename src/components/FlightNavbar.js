import React,{ useContext }  from 'react'
import "../styles/App.css";
import MyContext from "../AllContext";

export default function FlightNavbar() {
    const {fromcity,tocity,date,fromIATACode,
        toIATACode,adults,setAdults,
        children,setChildren,infants,passengerClass}=useContext(MyContext);
    const travellers=adults+infants+children;
  return (
    <div className='flight-navbar-container'>
       <div  className='flight-navbar-container-child fncc'>
           <p className='heading'>From</p>
           <input type='text' className='fncc-button' value={fromIATACode}/>
       </div>
       {/* <div className='flight-navbar-container-child fnccb'>
           <p>Button</p>
       </div> */}
       <div className='flight-navbar-container-child fncc'>
           <p className='heading'>To</p>
           <input type='text' className='fncc-button' value={toIATACode}/>
       </div>
       <div className='flight-navbar-container-child fncc'>
           <p className='heading'>Departure</p>
           <input type='text' className='fncc-button' value="24 March 24"/>
       </div>
       {/* <div className='flight-navbar-container-child fncc'>
           <p className='heading'>Return Date</p>
           <input type='text' className='fncc-button' disabled/>
       </div> */}
       <div className='flight-navbar-container-child fncc'>
           <p className='heading'>Passenger & Class</p>
           <input type='text' className='fncc-button' value={`${travellers} Traveller(s), ${passengerClass}`}/>
       </div>
       <div className='flight-navbar-container-child fncc'>
          <button className='update-search'>UPDATE SEARCH</button>
       </div>
    </div>
  )
}
