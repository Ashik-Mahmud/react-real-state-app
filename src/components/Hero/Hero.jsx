import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import "./Hero.css";
const Hero = () => {
  return (
    <>
      <section id="hero">
        <div className="hero-container">
          <h1>Find the Perfect place</h1>
          <p>
            Follow along as I build this mock real estate website from scratch
            using React JS. I will show you how to use the useState hook to
            toggle our mobile drop down menu as well{" "}
          </p>
          <div className="input-groups">
            <input
              type="search"
              id="search"
              placeholder="Search Luxury Apartments"
            />
            <div className="search-buttons">
              <div>
                <input name="apartments" type="radio" id="buy" />
                <label htmlFor="buy">Buy</label>
              </div>
              <div>
                <input name="apartments" type="radio" id="rent" />
                <label htmlFor="rent">Rent</label>
              </div>
              <button className="btn">
                <RiSearch2Line />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
