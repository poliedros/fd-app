import React, { FC, useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import { useNavigate } from "react-router-dom";

import axios from '../../axios';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';

import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

import { Data, Client } from '../../interfaces/Interfaces';

interface FdPizzaBasicNavMenuProps { data: Data }

const FdPizzaBasicNavMenu: FC<FdPizzaBasicNavMenuProps> = (props) => {

  /* const url = window.location.href.split("http://localhost:3000/").pop(); */

  const [client, setClients] = useState<Client>( {
    additionalInfo: '',
    address: '',
    code: '', //unnecessary
    email: '',
    id: '',
    name: '',
    phoneNumber: '',
    items: [],
    type: ''
  } );

  const getData = async () => {
    await axios.get('clients/' + props.data.url).then(result => setClients(result.data));
  };

  useEffect(() => {
    getData();
  }, []);

  props.data.client = client;

  console.log(props);
  
  let navigate = useNavigate();

  const location = useLocation();
  const data = location.state as Data;

  let total = 0;

  return (
  <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onClick={() => navigate("/" + props.data.firstName + "/" + props.data.client.name)}>
          <img
            src={ props.data.client.name }
            width="48"
            height="48"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Brand onClick={() => navigate("/" + props.data.firstName + "/" + props.data.client.name)}>{ props.data.client.name }</Navbar.Brand>

        {/* <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand onClick={() => navigate("/")}>
            <img
              src="pizza.png"
              width="36"
              height="36"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
              style={{ filter: "invert(1)" }}
            /> 
            <Badge pill bg="danger" style={{ position: "absolute", margin: "-15px 0 0 -15px" }}>
              { data ? data.products.length : 0 }
            </Badge>
          </Navbar.Brand>
        </Navbar.Collapse> */}

        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" style={{
                backgroundColor: "transparent",
                borderWidth: "0px",
                //borderColor: "white",
                padding: "12px",
                borderRadius: "100%"
          }} className="dropdown-toggle-image-small">
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
              <h5 style={{ textAlign: "center"}}>
                Sua compra
              </h5>
            </Dropdown.Item>
              { data && data.products.length > 0 ? data.products.map((p) =>
              <Dropdown.Item>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <Badge pill bg="danger" style={{ marginRight: "20px" }}>{ p.quantity }</Badge>
                  <div>
                  <h6>
                    <b>{ p.name }{ p.half ? ' / ' + p.half : '' }</b>
                  </h6>
                  <p>Sub-total: <b>R${ p.quantity * p.price },00</b></p>
                  </div>
                </div>
                { total += (p.quantity * p.price) }
                {/* <Button variant="outline-secondary" size="sm" style={{ textAlign: "center"}} disabled>Editar Pedido</Button> */}
              </Dropdown.Item>
              ) : 0 }
            <Dropdown.Item className="dropdown-item-text-no-content" style={{ textAlign: "center"}}>
              <h6><b>Total: R$ <span style={{ fontSize: "1.75rem" }}>{total}</span><span style={{ fontSize: "1.25rem" }}>,00</span></b></h6>
              {/* <Button variant="success" size="sm">Concluir Pedido</Button> */}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

      </Container>
    </Navbar>
  </>
  )
};

export default FdPizzaBasicNavMenu;

/* import React, { FC, useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import { useNavigate } from "react-router-dom";

import axios from '../../axios';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';

interface Item {
  id: string,
  name: string,
  description: string,
  type: string,
  price: number,
  quantity: number,
  clientId: string, //unnecessary
  code: string, //unnecessary
  image: string,
  label: string,
  note: string
}

interface Client {
  additionalInfo: string,
  address: string,
  code: string, //unnecessary
  email: string,
  id: string,
  name: string,
  phoneNumber: string,
  items: Item[],
  type: string
}

interface Data {
  url: string,
  client: Client
}

interface FdPizzaBasicNavMenuProps { props: string | ({ urlName: string; name: string; logo: string; code: string; } | { urlName: string; name: string; logo?: undefined; code: string; })[]; }

const FdPizzaBasicNavMenu: FC<FdPizzaBasicNavMenuProps> = (props: any) => {

  const url = window.location.href.split("http://localhost:3000/").pop();

  const [client, setClients] = useState<Client>();

  const getData = async () => {
    await axios.get('clients/' + props.props[0].name).then(result => setClients(result.data));
  };

  useEffect(() => {
    getData();
  }, []);
  
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

  return (
  <div>
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand onClick={() => navigate("/" + props.props[0].urlName)}>
        <img
          src={ props.props[0].logo }
          width="48"
          height="48"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Brand onClick={() => navigate("/" + props.props[0].urlName)}>{ props.props[0].name }</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Brand onClick={() => navigate("/")}>
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

export default FdPizzaBasicNavMenu; */