import React, { FC, useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import { useNavigate } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';

import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

import { Data } from '../../interfaces/Interfaces';

interface FdPizzaBasicNavMenuProps { data: Data }

const FdPizzaBasicNavMenu: FC<FdPizzaBasicNavMenuProps> = (props) => {
  
  let navigate = useNavigate();

  const location = useLocation();
  const data = location.state as Data;

  let total = 0;

  return (
  <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onClick={() => navigate("/" + props.data.client.name)}>
          <img
            src={ props.data ? props.data.client.logoImage : '' }
            width="48"
            height="48"
            className="d-inline-block align-top"
            alt={ '' }
          />
        </Navbar.Brand>
        <Navbar.Brand onClick={() => navigate("/" + props.data.client.name)}>{ props.data.client.name }</Navbar.Brand>

        <Dropdown>
          <Dropdown.Toggle
          id="dropdown-basic"
          style={{
            backgroundColor: "transparent",
            borderWidth: "0px",
            //borderColor: "white",
            padding: "12px",
            borderRadius: "100%"
          }}
          className="dropdown-toggle-image-small">
            <img
              src="pizza.png"
              width="36"
              height="36"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
              style={{ filter: "invert(1)" }}
            />
            <Badge pill bg="danger" style={{
              position: "absolute",
              marginLeft: "-15px", fontSize: ".9rem" }}>
                <b>
                  { data ? data.products.length : 0 }
                </b>
            </Badge>
          </Dropdown.Toggle>
          <Dropdown.Menu style={{
            right: "auto",
            left: "50%",
            WebkitTransform: "translate(-50%, 0)",
            transform: "translate(-50%, 0)",
            marginTop: "1rem",
            textAlign: "end",
            minWidth: "auto"
          }}>
            <Dropdown.Item className="dropdown-item-text-no-content">
              <h5 style={{ textAlign: "center", color: "black" }}>
                Sua compra
              </h5>
            </Dropdown.Item>
              { data && data.products.length > 0 ? data.products.map((p) =>
              <Dropdown.Item>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <Badge pill bg="danger" style={{ marginRight: "20px" }}>{ p.quantity }</Badge>
                  <div>
                  <h6 style={{ color: "black" }}>
                    <b>{ p.name }{ p.half ? ' / ' + p.half : '' }</b>
                  </h6>
                  <p>Sub-total: <b>R${ p.quantity * p.price },00</b></p>
                  </div>
                </div>
                <p style={{ fontSize: "0rem", color: "white", marginBottom: "0" }}>{ (total += (p.quantity * p.price)) == 0 ? null : total }</p>
              </Dropdown.Item>
              ) : null }
            <Dropdown.Item className="dropdown-item-text-no-content" style={{ textAlign: "center"}}>
              <h6 style={{ color: "black" }}><b>Total: R$ <span style={{ fontSize: "1.75rem" }}>{total}</span><span style={{ fontSize: "1.25rem" }}>,00</span></b></h6>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

      </Container>
    </Navbar>
  </>
  )
};

export default FdPizzaBasicNavMenu;