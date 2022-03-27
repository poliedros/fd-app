import React, { FC } from 'react';
import './FdNavbarMain.css';

import Container from 'react-bootstrap/Container';

/* import Nav from 'react-bootstrap/Nav'; */
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';

interface FdNavbarMainProps {}

const FdNavbarMain: FC<FdNavbarMainProps> = () => (
  <div style={{ position: "absolute", zIndex: "1" }}>
    <Navbar /* bg="dark" variant="dark" */ style={{ float: "left" }}>
      <Container style={{ display: "block", flexDirection: "column" }}>
      {/* <Navbar.Brand href="#home" style={{ marginRight: "auto" }}>
        <img
          src="/logo192.png"
          width="100"
          height="100"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Nav className="me-auto flex-column">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <NavDropdown title="Dropdown" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic" style={{
              backgroundColor: "transparent",
              borderColor: "transparent",
              padding: "0px",
              borderRadius: "100%"
        }} className="dropdown-toggle-image btn-main">
          <img
            src="/pblogo.png"
            width="128"
            height="128"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Dropdown.Toggle>

        <Dropdown.Menu style={{
          right: "auto",
          left: "50%",
          WebkitTransform: "translate(-50%, 0)",
          transform: "translate(-50%, 0)",
          marginTop: "1rem",
          textAlign: "center",
          minWidth: "auto"
        }}>
          <Dropdown.Item href="#/action-1">
            <img
              src="/pizza.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">
            <img
              src="/pizzeria.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Dropdown.Item>
          <NavDropdown.Divider />
          <Dropdown.Item href="#/action-3">
            <img
              src="/chat.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </Container>
    </Navbar>
  </div>
);

export default FdNavbarMain;
