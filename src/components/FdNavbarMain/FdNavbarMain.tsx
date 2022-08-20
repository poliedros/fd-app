import React, { FC } from 'react';
import './FdNavbarMain.css';

import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';

interface FdNavbarMainProps {}

const FdNavbarMain: FC<FdNavbarMainProps> = () => (
  <div style={{ position: "absolute", zIndex: "1" }}>
    <Navbar /* bg="dark" variant="dark" */ style={{ float: "left" }}>
      <Container style={{ display: "block", flexDirection: "column" }}>
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
