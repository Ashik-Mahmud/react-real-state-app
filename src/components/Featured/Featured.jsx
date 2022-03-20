import React from "react";
import {
  bath1,
  bath2,
  bed1,
  bed2,
  bed3,
  bed4,
  house1,
  house2,
  kitchen,
  livingRoom,
} from "../../assets/image";
import "./Featured.css";
const Featured = () => {
  return (
    <>
      <section id="featured">
        <div className="featured-container container">
          <div className="section-title">
            <h2>Top Featured listing</h2>
            <p>Select listing by State, Address, on your views</p>
          </div>
          <div className="featured-grid">
            <div className="item house">
              <img src={house1} alt={house1} />
            </div>
            <div className="item">
              <img src={bath1} alt={bath1} />
            </div>
            <div className="item">
              <img src={bed1} alt={bed1} />
            </div>
            <div className="item">
              <img src={bed2} alt={bed2} />
            </div>
            <div className="item">
              <img src={bath2} alt={bath2} />
            </div>
            <div className="item address">
              <div>
                <h3>123 Acme St. Dallas TX</h3>
                <ul>
                  <li>
                    <b>Bedrooms</b>
                    <span>5</span>
                  </li>
                  <li>
                    <b>Bathrooms</b>
                    <span>7</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <b>House for sale</b>
                    <h2>$ 21,5445</h2>
                  </li>
                  <li>
                    <b>Square feet</b>
                    <span>8120</span>
                  </li>
                  <li>
                    <b>Est Payment</b>
                    <span>$14000/month</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="item details">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                deleniti at iusto aperiam vero aliquid doloribus ipsam non
                sapiente eum neque obcaecati, laborum rem laboriosam modi quidem
                enim, odio eius!
              </p>
              <button className="btn">View Listing</button>
            </div>
          </div>

          {/* second  */}

          <div className="featured-grid">
            <div className="item">
              <img src={kitchen} alt={kitchen} />
            </div>

            <div className="item">
              <img src={bed4} alt={bed4} />
            </div>
            <div className="item house">
              <img src={house2} alt={house2} />
            </div>
            <div className="item">
              <img src={bed3} alt={bed2} />
            </div>

            <div className="item">
              <img src={livingRoom} alt={livingRoom} />
            </div>
            <div className="item details">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                deleniti at iusto aperiam vero aliquid doloribus ipsam non
                sapiente eum neque obcaecati, laborum rem laboriosam modi quidem
                enim, odio eius!
              </p>
              <button className="btn">View Listing</button>
            </div>
            <div className="item address">
              <div>
                <h3>123 Acme St. Dallas TX</h3>
                <ul>
                  <li>
                    <b>Bedrooms</b>
                    <span>5</span>
                  </li>
                  <li>
                    <b>Bathrooms</b>
                    <span>7</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <b>House for sale</b>
                    <h2>$ 21,5445</h2>
                  </li>
                  <li>
                    <b>Square feet</b>
                    <span>8120</span>
                  </li>
                  <li>
                    <b>Est Payment</b>
                    <span>$14000/month</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Featured;
