import React from 'react'

export default function FlightNavbar() {
  return (
    <div className='flight-navbar-container'>
       <div  className='flight-navbar-container-child fncc'>
           <p className='heading'>From</p>
           <input type='text' className='fncc-button'/>
       </div>
       <div className='flight-navbar-container-child fnccb'>
           <p>Button</p>
       </div>
       <div className='flight-navbar-container-child fncc'>
           <p className='heading'>To</p>
           <input type='text' className='fncc-button'/>
       </div>
       <div className='flight-navbar-container-child fncc'>
           <p className='heading'>Departure</p>
           <input type='text' className='fncc-button'/>
       </div>
       <div className='flight-navbar-container-child fncc'>
           <p className='heading'>Return Date</p>
           <input type='text' className='fncc-button'/>
       </div>
       <div className='flight-navbar-container-child fncc'>
           <p className='heading'>Passenger & Class</p>
           <input type='text' className='fncc-button'/>
       </div>
       <div className='flight-navbar-container-child fncc'>
          <button className='update-search'>Update Search</button>
       </div>
    </div>
  )
}
