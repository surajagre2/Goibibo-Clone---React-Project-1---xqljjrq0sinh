import React from 'react'
import { useContext } from 'react'
import HotelContext from '../../AllHotelContext'

export default function SetAdultsChildrenRooms() {
  const {adults,setAdults,rooms,setRooms,child,setChild}=useContext(HotelContext);
  return (
    <div className='setadultschildandrooms'>
      <div className='setadultschildandroomschild'>
        <div className='setroomsadultchildbox'>
            <div className='setadultschildandroomschild'>
                <p className='allRAC'>Rooms</p>
                <p className='a'>(Max 8)</p>
            </div>
            <div className='setadultschildandroomschild c'>
                <p className='b'>-</p>
                <p className='b'>{rooms}</p>
                <p className='b'>+</p>
            </div>
        </div>
        <div className='setroomsadultchildbox'>
            <div className='setadultschildandroomschild'>
                <p className='allRAC'>Adults</p>
                <p className='a'>(12+ yr)</p>
            </div>
            <div className='setadultschildandroomschild c'>
                <p className='b'>-</p>
                <p className='b'>{adults}</p>
                <p className='b'>+</p>
            </div>
        </div>
        <div className='setroomsadultchildbox'>
            <div className='setadultschildandroomschild'>
                <p className='allRAC'>Children</p>
                <p className='a'>(0-12 yr)</p>
            </div>
            <div className='setadultschildandroomschild c'>
                <p className='b'>-</p>
                <p className='b'>{child}</p>
                <p className='b'>+</p>
            </div>
        </div>
      </div>
    </div>
  )
}
