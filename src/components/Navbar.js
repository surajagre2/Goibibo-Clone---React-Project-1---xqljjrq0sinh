import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, Outlet } from "react-router-dom";
import "../styles/App.css";
import "../styles/Navbar.css";
export default function Navbar({handleRegistration}) {
  const [checkLogin,setLogin]=useState(true);
  const [namee,setNamee]=useState();
  useEffect(()=>{
   const getToken=sessionStorage.getItem("authToken");
   if(getToken!=null)
   {
    setLogin(false)
    setNamee(sessionStorage.getItem("userInfo"));
   }
  })

  return (
    <div className="nav-container">
      <nav className="navbar">
        <header className="header">
          <div className="logo-container">
            <span className="logo"></span>
          </div>
          <ul className="list">
            <li>
              <NavLink to="/flights" className="booking list-item">
                <span className="flight-image"></span>
                <p className="services">Flights</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/hotels" className="booking list-item">
                <span className="hotels-image"></span>
                <p className="services">Hotels</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/trains" className="booking list-item">
                <span className="cab-image"></span>
                <p className="services">Trains</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/cabs" className="booking list-item">
                <span className="trains-image"></span>
                <p className="services">Cabs</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/bus" className="booking list-item">
                <span className="bus-image"></span>
                <p className="services">Bus</p>
              </NavLink>
            </li>
            {/* <li>
                        <NavLink to="/holidays" className='booking list-item'>
                            <span className='holidays-image'></span>
                            <p className='services'>Holidays</p>
                        </NavLink>
                    </li> */}
          </ul>
          <div className="logincontainer">
            <div className="manage-trip-container">
              <div>
                <div className="list-item">
                  <span className="trips-image"></span>
                  <div>
                    <p id="my-trip-fontsize">My Trips</p>
                    <p className="services manage-booking-text">
                      Manage Booking
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="logincontainerchild" >
                <span className="profile-icon"></span>
                {checkLogin?<div onClick={handleRegistration} className="login-name">LOGIN / SIGNUP</div>:<p className="login-name">{`${namee}`}</p>}
              </div>
            </div>
          </div>
        </header>
      </nav>
      <Outlet />
    </div>
  );
}
