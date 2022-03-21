import React, { useEffect, useState } from "react";
import "./Best.css";
import BestCard from "./BestCard";
const Best = () => {
  const [apartments, setApartments] = useState([]);
  const [storeApartment, setStoreApartment] = useState([]);
  const [add, setAdd] = useState("all");
  const loadApartments = async () => {
    const response = await fetch("./data.json");
    const data = await response.json();
    setApartments(data);
    setStoreApartment(data);
  };
  useEffect(() => {
    loadApartments();
  }, []);

  const rolesArr = apartments.map((apartment) => apartment.role);
  let rolesUniqArr = [];
  for (let i = 0; i < rolesArr.length; i++) {
    const element = rolesArr[i];
    if (!rolesUniqArr.includes(element)) {
      rolesUniqArr.push(element);
    }
  }

  const handleBest = (role) => {
    if (role === "all") {
      setStoreApartment(apartments);
    } else {
      const filteredBestData = apartments.filter(
        (apartment) => apartment.role === role
      );
      setStoreApartment(filteredBestData);
    }
    setAdd(role);
  };

  return (
    <>
      <section id="best">
        <div className="best-container container">
          <h2>Find best rated properties </h2>
          <div className="best-content">
            <ul className="tab-buttons">
              <li
                onClick={() => handleBest("all")}
                className={`${add === "all" ? "active" : ""}`}
              >
                All
              </li>
              <li
                onClick={() => handleBest("residential")}
                className={`${add === "residential" ? "active" : ""}`}
              >
                residential
              </li>
              <li
                onClick={() => handleBest("commercial")}
                className={`${add === "commercial" ? "active" : ""}`}
              >
                commercial
              </li>
              <li
                onClick={() => handleBest("agriculture")}
                className={`${add === "agriculture" ? "active" : ""}`}
              >
                agriculture
              </li>
            </ul>
            <div className="best-grid">
              {storeApartment.map(({ id, imageUrl, role }) => (
                <BestCard key={id} imageUrl={imageUrl} role={role} />
              ))}
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
