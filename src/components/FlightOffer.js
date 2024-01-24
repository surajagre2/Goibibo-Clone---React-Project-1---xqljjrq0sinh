import React from "react";
import "../styles/App.css";
import { projectID } from "./Constrains";
import { offerURL } from "./Constrains";
import { useState, useEffect} from "react";

export default function FlightOffer() {
  const [offer, setOffer] = useState("ALL");
  const [offerdata, setOfferData] = useState([]);
  async function getOffer() {
    try {
      let url = offerURL + `?filter={"type":"${offer}"}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          projectID: projectID,
          "Content-Type": "application/json",
        },
      });
      const da = await response.json();
      setOfferData(da.data.offers);
    } catch (error) {
      console.log(error);
    }
  }
  function offers(e) {
    let x = e.target.innerHTML;
    setOffer(x.toUpperCase());
    getOffer();
  }
  useEffect(() => {
    getOffer();
  });
  return (
    <div>
      <div className="offer-section">
        <div className="offer-section-container">
          <div className="offer-container-child">
            <p className="offer-for-you">Offer For You</p>
            <div className="offer-tabs">
              <ul className="offer-list">
                <li className="offer-list-child" onClick={(e) => offers(e)}>
                  All
                </li>
                <li className="offer-list-child" onClick={(e) => offers(e)}>
                  Flights
                </li>
                <li className="offer-list-child" onClick={(e) => offers(e)}>
                  Hotels
                </li>
                <li className="offer-list-child" onClick={(e) => offers(e)}>
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
    </div>
  );
}
