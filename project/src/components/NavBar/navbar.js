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
        <img src="..\..\..\img\source (1).png" className="logo" alt="logo of Source" href="/Home" />
        <nav>
        <button className="hamburgerButton" state={hamburgerOpen ? "Close" : "Open"} onClick={handleToggle}><img src="img/hamburger-download.png" className="ham-icon" alt="hamburger icon" /></button>
          <ul className={`menuNav ${hamburgerOpen ? " showMenu" : ""}`}>
            <li><a className="navigator" href="/Home">Shop</a></li>
            <li><a className="navigator" href="/About">About</a></li>
            <li><a className="navigator" href="/Account">Account</a></li>
            <li><a className="navigator" href="/Cart">Cart</a></li>
          </ul>
        </nav>
      </div>
    </div>
    /*<header>
      <div className="container">
      <div className="navbar">  
      <Nav>
      <button className="hamburgerButton" state={hamburgerOpen ? "Close" : "Open"} onClick={handleToggle}><img src="img/hamburger.jpg" className="ham-icon" alt="hamburger icon" /></button>
        <Nav.Item>
          <a href="/Home" ><img className="logo" src="..\..\..\img\source-logo.png" alt="Source logo" /></a>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Shop" id="nav-text" aria-label="">
            Shop
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/About" id="nav-text" aria-label="">
            About
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <InputGroup className="headerSearch">
            <Input placeholder="Search"/>
            <Button>
              Go
            </Button>
          </InputGroup>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Account" id="nav-text" aria-label="">
            Account
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Cart" id="nav-text" aria-label="">
            Cart
          </Nav.Link>
        </Nav.Item>
      </Nav>
      </div>
      </div>
    </header>
    */
  );
}
