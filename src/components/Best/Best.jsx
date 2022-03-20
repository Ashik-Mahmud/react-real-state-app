import React from "react";
import { apt1, apt2, apt3 } from "../../assets/image";
import "./Best.css";
const Best = () => {
  return (
    <>
      <section id="best">
        <div className="best-container container">
          <h2>Find best rated properties </h2>
          <div className="best-content">
            <ul className="tab-buttons">
              <li className="active">All</li>
              <li>Commercial</li>
              <li>Residential</li>
              <li>Agriculture</li>
            </ul>
            <div className="best-grid">
              <div className="item">
                <img src={apt1} alt={apt1} />
              </div>
              <div className="item">
                <img src={apt2} alt={apt1} />
              </div>
              <div className="item">
                <img src={apt3} alt={apt1} />
              </div>
            </div>
            <div className="center-text ">
              <button className="btn">Show more</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Best;
