import React, { useState } from "react";
import { BsGrid } from "react-icons/bs";
import { FaRegWindowClose } from "react-icons/fa";
import { SiHomeadvisor } from "react-icons/si";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <header id="header" onClick={handleTitle}>
        <div className="container navbar">
          <nav>
            <a href="#home" className="d-flex">
              <span className="d-flex">
                <SiHomeadvisor /> Real{" "}
              </span>
              State
            </a>
            <button className="btn">Sign Up</button>
            <ul className={`primary-menu ${show ? "active" : ""}`}>
              {["home", "best", "featured", "about", "contact"].map(
                (link, index) => (
                  <NavLinks
                    key={link + index}
                    pathName={link}
                    linkName={link}
                  />
                )
              )}
            </ul>
            <div className="menuIcon" onClick={() => setShow((prev) => !prev)}>
              {show ? <FaRegWindowClose /> : <BsGrid />}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

const NavLinks = ({ pathName, linkName }) => {
  return (
    <li>
      <a href={pathName === "home" ? "#" : "#" + pathName}>{linkName}</a>
    </li>
  );
};
const handleTitle = (e) => {
  changeTitle(e.target.innerText);
};

const changeTitle = (appTitle) => {
  document.title = appTitle ? appTitle : "Real State -RealState App";
};
export default Navbar;
