import React from 'react'
import HomepageHeadline from './HomepageHeadline';
import WhereCheckInOut from './WhereCheckInOut';
import HotelContext from '../../AllHotelContext';
import { useState } from 'react';
export default function HotelHomePage() {
  const [adults,setAdults]=useState(2);
  const [rooms,setRooms]=useState(1);
  const [child,setChild]=useState(0);
  return (
    <>
      <HotelContext.Provider value={{adults,setAdults,rooms,setRooms,child,setChild}}>
        <div className='abccccc'>
          <HomepageHeadline/>
          <WhereCheckInOut/>
        </div>
      </HotelContext.Provider>
    </>
  )
}
