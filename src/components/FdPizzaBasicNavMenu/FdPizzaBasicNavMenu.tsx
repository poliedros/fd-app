import React, { FC } from 'react';

import { useLocation } from 'react-router-dom';

import { useNavigate } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';

/* import itemsFile from '../../files/items.json'; */

interface FdPizzaBasicNavMenuProps { props: string | ({ urlName: string; name: string; logo: string; code: string; } | { urlName: string; name: string; logo?: undefined; code: string; })[]; }

const FdPizzaBasicNavMenu: FC<FdPizzaBasicNavMenuProps> = (props: any) => {
  
  interface Product {
    id: number;
    title: string;
    name: string;
    quantity: string;
    price: number;
    note: string;
  }

  let navigate = useNavigate();

  const location = useLocation();
  const state = location.state as Product[];

  /* const url = window.location.href.split("http://localhost:3000/").pop(); */

  console.log("AQUI")
  console.log(state)
  console.log(props)
  console.log(props.props[0])

  return (
  <div>
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand onClick={() => navigate("/" + props.props[0].urlName)} /* href="#home" */>
        <img
          src={ props.props[0].logo }
          width="48"
          height="48"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Brand onClick={() => navigate("/" + props.props[0].urlName)} /* href="#home" */>{ props.props[0].name }</Navbar.Brand>
      {/* <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav> */}
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Brand onClick={() => navigate("/")} /* href="#home" */>
          <img
            src="pizza.png"
            width="36"
            height="36"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
            style={{ filter: "invert(1)" }}
          />
          <Badge pill bg="danger" style={{ position: "absolute", margin: "-15px 0 0 -15px" }}>
            { state ? state.length : 0 }
          </Badge>
        </Navbar.Brand>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
)
};

export default FdPizzaBasicNavMenu;
