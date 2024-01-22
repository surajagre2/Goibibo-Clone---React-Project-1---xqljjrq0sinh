import React from "react";
import { offerURL } from "./Constrains";
import { projectID } from "./Constrains";
import hello from "../Asset/sponsored.png";
import poster from "../Asset/poster1.jpg";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [offer, setOffer] = useState("ALL");
  const [offerdata, setOfferData] = useState([]);
  const [oneWay, setOneWay] = useState(true);
  const [roundTrip, setRoundTrip] = useState(false);
  const [multiCity, setMultyTrip] = useState(false);
  const [fromcityfocus,setFromCityFocus]=useState(false);
  const [fromcityfocus2,setFromCityFocus2]=useState(false);
  async function getOffer(e) {
    try {
      const types = e.target.innerHTML.toUpperCase();
      setOffer(types);
      let url = offerURL + `?filter={"type":"ALL"}`;
      console.log(url);
      const response = await fetch(url, {
        method: "GET",
        headers: {
          projectID: projectID,
          "Content-Type": "application/json",
        },
      });
      const da = await response.json();
      setOfferData(da.data.offers);
      console.log(offerdata);
    } catch (error) {
      console.log(error);
    }
  }
  function tripToggle(e) {
    console.log(e.target.value);
    if (e.target.value === "one-way") {
      setOneWay(true);
      setRoundTrip(false);
      setMultyTrip(false);
    } else if (e.target.value === "round-trip") {
      setOneWay(false);
      setRoundTrip(true);
      setMultyTrip(false);
    } else {
      setOneWay(false);
      setRoundTrip(false);
      setMultyTrip(true);
    }
  }
  useEffect(() => {
    let trip = document.getElementById("oneday");
    trip.checked = true;
  }, []);
  return (
    <div className="home-container">
      <h1 className="home-heading">Domestic and International Flights</h1>
      <div className="homechild">
        <div className="trip-container">
          <div
            className={`trip-container-child ${oneWay ? "trip-toggle" : ""}`}
          >
            <input
              type="radio"
              id="oneday"
              name="trip"
              value="one-way"
              onFocus={(e) => tripToggle(e)}
            />
            <label htmlFor="oneday">One-way</label>
          </div>
          <div
            className={`trip-container-child ${roundTrip ? "trip-toggle" : ""}`}
          >
            <input
              type="radio"
              id="roundtrip"
              name="trip"
              value="round-trip"
              onFocus={(e) => tripToggle(e)}
            />
            <label htmlFor="roundtrip">Round-trip</label>
          </div>
          <div
            className={`trip-container-child ${multiCity ? "trip-toggle" : ""}`}
          >
            <input
              type="radio"
              id="multicity"
              name="trip"
              value="multi-city"
              onFocus={(e) => tripToggle(e)}
            />
            <label htmlFor="multicity">Multi-city</label>
          </div>
        </div>
        <div className="one-way-container">
          <div className="one-way-container-child">
            <div className={fromcityfocus?"from-container-focus1":"from-container"}>
              <div className={fromcityfocus?"from-container-child-focus1":"from-container-child"}>
                <span className={fromcityfocus?"enter-city-from-focus1":"enter-city-from"}>From</span>
                <input type="text" className="enter-city" onFocus={()=>setFromCityFocus(true)} onBlur={()=>setFromCityFocus(false)} placeholder="Enter city or airport"/>
              </div>
            </div>
          </div>
          <div className="one-way-container-child">
            <div className={fromcityfocus2?"from-container-focus2":"from-container"} id={fromcityfocus?"check":""}>
                <div className={fromcityfocus2?"from-container-child-focus2":"from-container-child"}>
                  <span className={fromcityfocus2?"enter-city-from-focus2":" enter-city-from"}>To</span>
                  <input type="text" className="enter-city" onFocus={()=>setFromCityFocus2(true)} onBlur={()=>setFromCityFocus2(false)} placeholder="Enter city or airport"/>
                </div>
            </div>
          </div>
        </div>
        <div className="fare-type">
          <div className="fare-type-child1">
            <label htmlFor="fa-type">Select A Fare Type:</label>
          </div>
          <div className="fare-type-child2">
            <div className="fare-type-child2-child">
              <input type="radio" id="regular" name="fare-type" />
              <label htmlFor="regular">Regular</label>
            </div>
            <div className="fare-type-child2-child">
              <input type="radio" id="armed-forces" name="fare-type" />
              <label htmlFor="armed-forces">Armed Forces</label>
            </div>
            <div className="fare-type-child2-child">
              <input type="radio" id="senior-citizen" name="fare-type" />
              <label htmlFor="senior-citizen">Senior Citizen</label>
            </div>
            <div className="fare-type-child2-child">
              <input type="radio" id="student" name="fare-type" />
              <label htmlFor="student">Student</label>
            </div>
            <div className="fare-type-child2-child">
              <input type="radio" id="doctors-nurse" name="fare-type" />
              <label htmlFor="doctors-nurse">Doctors & Nurse</label>
            </div>
          </div>
        </div>
        <div className="search-button-container">
          <button id="search-button">SEARCH FLIGHTS</button>
        </div>
      </div>
      <div className="image-section">
        <div className="image-container">
          <div className="image-container-child">
            <img src={poster} id="posterimage" alt="Image" />
            <img src={hello} id="sponsoredimage" alt="Image" />
          </div>
        </div>
      </div>
      <div className="offer-section">
        <div className="offer-section-container">
          <div className="offer-container-child">
            <p className="offer-for-you">Offer For You</p>
            <div className="offer-tabs">
              <ul className="offer-list">
                <li className="offer-list-child" onClick={(e) => getOffer(e)}>
                  All
                </li>
                <li className="offer-list-child" onClick={(e) => getOffer(e)}>
                  Flights
                </li>
                <li className="offer-list-child" onClick={(e) => getOffer(e)}>
                  Hotels
                </li>
                <li className="offer-list-child" onClick={(e) => getOffer(e)}>
                  Trains
                </li>
              </ul>
              <a>See All Offer</a>
            </div>
            <div>
              <div className="offer-container">
                {offerdata.map((item) => (
                  <div className="offers-array">
                    <div className="offfer-array-details">
                      <div className="offer-image-container">
                        <img src={item.heroUrl} className="imagee"></img>
                      </div>
                      <div className="offer-description">
                        <p>{item.lob}</p>
                        <h3>
                          Get up to 50% OFF on hotels, homestays &amp; Hourly
                          Stays.
                        </h3>
                        <p>Valid till 25th Jan'24</p>
                        <div></div>
                      </div>
                    </div>
                    <div className="view-more-details">
                      <button className="view-more-details-button">
                        View More Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={(e) => getOffer(e)}>Click Click Click</button>
    </div>
  );
}
