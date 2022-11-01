import React from "react"; //import React Component
import { NavLink } from "react-router-dom";
import { Dropdown, Nav } from "react-bootstrap";
import "../../index.css";
import { InputGroup, Button, Input } from 'reactstrap';

// Nav bar with both media queries
export default function NavBar() {
  return (
    <header>
      <Nav classname="justify-content-end" defaultActiveKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
        <Nav.Item>
          <Dropdown id="dropdownMenuButton">
            <Dropdown.Toggle variant="success">MENU</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <NavLink
                  to="/Home"
                  id="dropdownMenuText"
                  aria-label="Go to home page"
                >
                  Cart
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink
                  to="/cart"
                  id="dropdownMenuText"
                  aria-label=""
                >
                  About
                </NavLink>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav.Item>
        <Nav.Item>
          <img src="../../public/SourceLogo.png" alt="Source logo" />
        </Nav.Item>
        <Nav.Item>
          <InputGroup>
            <Input placeholder="Search..........."/>
            <Button>
              Search it up lol
            </Button>
          </InputGroup>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Dashboard" aria-label="">
            Account
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
  );
}
