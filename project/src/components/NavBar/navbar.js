import React from "react"; //import React Component
import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import "../../index.css";
import { Container, Row, Col } from 'reactstrap';

// Nav bar with both media queries
export default function NavBar() {
  return (
    <header>
      <nav>
        <Container className="navbar" fluid={true}>
          <Row>
            <Col xs="4" aria-label="">
              <img
                src=""
                className=""
                alt=""
              />
            </Col>
            <Col>
              <input type="text" placeholder="Search.."/>
            </Col>
            <Col>
              <NavLink
                to="/Dashboard"
                aria-label=""
              >
                Account
              </NavLink>
            </Col>
          </Row>
        </Container>
        <Dropdown id="dropdownMenuButton">
          <Dropdown.Toggle variant="success">MENU</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <NavLink
                to="/Home"
                id="dropdownMenuText"
                aria-label="Go to home page"
              >
                Home
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink
                to="/Dashboard"
                id="dropdownMenuText"
                aria-label=""
              >
                Accout
              </NavLink>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </nav>
    </header>
  );
}
