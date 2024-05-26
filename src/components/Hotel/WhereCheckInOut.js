import React, { useEffect } from 'react'
import { useContext } from 'react'
import HotelContext from '../../AllHotelContext'
import SetAdultsChildrenRooms from './SetAdultsChildrenRooms';

export default function WhereCheckInOut() {
  const {adults,setAdults,rooms,setRooms,child,setChild}=useContext(HotelContext);
  return (
    <div className='wherecheckinout'>
        <span className='where'>Where</span>
        <div className='search-location'>
            <span>
            <i class="fa-solid fa-magnifying-glass"></i>
            </span>
            <input type="text" placeholder="e.g. - Area, Landmark or Property Name" autocomplete="off" id="search-hotels"></input>
        </div>
        <div className='checkInOut'>
          <div>
            <div className='checkIN'>Check-In</div>
            <input type='date' className='checkdate' id="check-in-date"></input>
          </div>
          <div className='total-days-booked'>1 Night</div>
          <div>
            <div className='checkIN'>Check-Out</div>
            <input type='date' className='checkdate' id="check-out-date"></input>
          </div>
        </div>
        <div>
          <div className='guestandrooms'>
            <p className='guestandroomsheadline'>Guests & Rooms</p>
            <p>
                {adults} Adults | {child > 0? `${child} Children |`:" "} {rooms} Rooms
            </p>
            <SetAdultsChildrenRooms/>
          </div>
        </div>
    </div>
  )
}
