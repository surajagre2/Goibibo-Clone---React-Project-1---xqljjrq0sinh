import React from "react";
import { useState, useEffect } from "react";
import "../styles/App.css";

export default function TravellersClass({
  adults,
  setAdults,
  children,
  setChildren,
  infants,
  setInfants,
  passengerClass,
  setPassengerClass,
}) {
  const [passengerDetails, setPassengerDetails] = useState(false);
  const [economy, setEconomy] = useState(true);
  const [premiumeconomy, setPremiumEconomy] = useState(false);
  const [business, setBusiness] = useState(false);
  const [firstclass, setFirstClass] = useState(false);
  function setTravellerClass(e) {
    let y = e.target.innerHTML;
    console.log(y);
    setPassengerClass(y);
    if (y === "economy") {
      setEconomy(true);
      setBusiness(false);
      setFirstClass(false);
      setPremiumEconomy(false);
    } else if (y === "premium economy") {
      setEconomy(false);
      setBusiness(false);
      setFirstClass(false);
      setPremiumEconomy(true);
    } else if (y === "business") {
      setEconomy(false);
      setBusiness(true);
      setFirstClass(false);
      setPremiumEconomy(false);
    } else {
      setEconomy(false);
      setBusiness(false);
      setFirstClass(true);
      setPremiumEconomy(false);
    }
  }
  function cancleTravellersButton() {
    setAdults(1);
    setInfants(0);
    setChildren(0);
    setPassengerClass("economy");
    setPassengerDetails(false);
  }
  return (
    <div>
      <div className="one-way-container-child">
        <div
          className={
            passengerDetails ? "travellers-container" : "from-container"
          }
        >
          <div
            className={
              passengerDetails
                ? "travellers-container-child-focus"
                : "travellers-container-child"
            }
          >
            <span
              className={
                passengerDetails
                  ? "travellers-container-child-focus1"
                  : "enter-city-from"
              }
            >
              Travellers & Class
            </span>
            <p
              onClick={() => setPassengerDetails(true)}
              onBlur={() => setPassengerDetails(false)}
              className={passengerDetails ? "passengerNumber" : "abc"}
            >
              {adults} Adults {children > 0 ? `, ${children} children` : ""}{" "}
              {infants > 0 ? `, ${infants} infants` : ""}{" "}
              <span
                className={passengerDetails ? "passengerNumberChild" : "arrow"}
              >{`>`}</span>
            </p>
            <p
              className={passengerDetails ? "selectedClass" : "passengerClass"}
            >
              {passengerClass}
            </p>
          </div>
          {passengerDetails && (
            <div>
              <div className="passenger-addition-container">
                <div className="passenger-addition-container-child">
                  <div className="adult-child-infants-container">
                    <div className="adult-child-infants-container-child">
                      <p className="adult-name">Adults</p>
                      <p className="adult-age">{`(Aged 12+ yrs)`}</p>
                      <div className="travellers-increment-decrement-container">
                        <span
                          className="increment"
                          onClick={() => setAdults(adults - 1)}
                        >
                          -
                        </span>
                        <span>{adults}</span>
                        <span
                          className="decrement"
                          onClick={() => setAdults(adults + 1)}
                        >
                          +
                        </span>
                      </div>
                    </div>
                    <div className="adult-child-infants-container-child">
                      <p className="adult-name">Child</p>
                      <p className="adult-age">{`(Aged 2-12 yrs)`}</p>
                      <div className="travellers-increment-decrement-container">
                        <span
                          className="increment"
                          onClick={() => setChildren(children - 1)}
                        >
                          -
                        </span>
                        <span>{children}</span>
                        <span
                          className="decrement"
                          onClick={() => setChildren(children + 1)}
                        >
                          +
                        </span>
                      </div>
                    </div>
                    <div className="adult-child-infants-container-child">
                      <p className="adult-name">Infants</p>
                      <p className="adult-age">{`(Below 2 yrs)`}</p>
                      <div className="travellers-increment-decrement-container">
                        <span
                          className="increment"
                          onClick={() => setInfants(infants - 1)}
                        >
                          -
                        </span>
                        <span>{infants}</span>
                        <span
                          className="decrement"
                          onClick={() => setInfants(infants + 1)}
                        >
                          +
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="travel-class-container">
                  <p className="travel-class-headline">Travel Class</p>
                  <ul className="travel-class-list">
                    <li
                      className={`travel-class-list-child ${
                        economy ? "c" : ""
                      }`}
                      onClick={(e) => setTravellerClass(e)}
                    >
                      economy
                    </li>
                    <li
                      className={`travel-class-list-child ${
                        premiumeconomy ? "c" : ""
                      }`}
                      onClick={(e) => setTravellerClass(e)}
                    >
                      premium economy
                    </li>
                    <li
                      className={`travel-class-list-child ${
                        business ? "c" : ""
                      }`}
                      onClick={(e) => setTravellerClass(e)}
                    >
                      business
                    </li>
                    <li
                      className={`travel-class-list-child ${
                        firstclass ? "c" : ""
                      }`}
                      onClick={(e) => setTravellerClass(e)}
                    >
                      first class
                    </li>
                  </ul>
                </div>
              </div>
              <div className="travellers-button">
                <button
                  className="cancle-button"
                  onClick={() => cancleTravellersButton()}
                >
                  Cancle
                </button>
                <button
                  className="done-button"
                  onClick={() => setPassengerDetails(false)}
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
