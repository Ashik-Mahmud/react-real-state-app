import React from "react";
import "./Navbar.css";

const Overlay = ({ setShow, show }) => {
  return (
    <div
      className={show ? "overlay active" : "overlay"}
      onClick={() => setShow(false)}
    />
  );
};

export default Overlay;
