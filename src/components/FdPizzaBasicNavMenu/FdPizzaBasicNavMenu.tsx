import React, { FC, useState, useEffect } from 'react';

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

interface Product {
  type: string;
  image: string | undefined;
  description: string;
  id: number;
  label: string;
  title: string;
  name: string;
  half: string;
  quantity: number;
  price: number;
  note: string;
}

interface Data {
  url: string,
  client: Client,
  products: Product[]
}

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

  return (
  <>
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand onClick={() => navigate("/" + props.data.client.name)}>
        <img
          src={ props.data.client.name }
          width="48"
          height="48"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Brand onClick={() => navigate("/" + props.data.client.name)}>{ props.data.client.name }</Navbar.Brand>
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
            { data ? data.products.length : 0 }
          </Badge>
        </Navbar.Brand>
      </Navbar.Collapse>
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