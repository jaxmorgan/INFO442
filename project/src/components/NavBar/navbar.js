import React from "react"; //import React Component
import { NavLink } from "react-router-dom";
import { Dropdown, Nav } from "react-bootstrap";
import "../../index.css";
import { InputGroup, Button, Input } from 'reactstrap';

// Nav bar with both media queries
export default function NavBar() {
  return (
    <header>
      <Nav>
        <Nav.Item>
          <img className="logo" src="..\..\..\img\source-logo.png" alt="Source logo" />
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
              Search it up lol
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
    </header>
  );
}
