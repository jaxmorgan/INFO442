import React from "react"; //import React Component
import { NavLink } from "react-router-dom";
import { Dropdown, Nav } from "react-bootstrap";
import "../../index.css";
import { InputGroup, Button, Input } from 'reactstrap';
import { useState } from "react"


// Nav bar with both media queries
export default function NavBar() {

    // hamburger menu for smaller screen size
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const handleToggle = () => {
      setHamburgerOpen(previousValue => !previousValue)
    }


  return (
    <div className="nav-container">
      <div className="navbar">
        <img src="..\..\..\img\sourceedited.png" className="logo" alt="logo of Source" href="/Home" />
        <nav>
        <button className="hamburgerButton" state={hamburgerOpen ? "Close" : "Open"} onClick={handleToggle}><img src="img/hamburger-download.png" className="ham-icon" alt="hamburger icon" /></button>
          <ul className={`menuNav ${hamburgerOpen ? " showMenu" : ""}`}>
            <li><a className="navigator" href="/Home">Shop</a></li>
            <li><a className="navigator" href="/About">About</a></li>
            <li><a className="navigator" href="/Account">Account</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
