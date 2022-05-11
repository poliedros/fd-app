import React, { FC, useState, useEffect } from 'react';

import { useNavigate } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import axios from '../../axios';

import { Data, Client } from '../../interfaces/Interfaces';

interface FdPizzaBasicIntroProps { data: Data }

const FdPizzaBasicIntro: FC<FdPizzaBasicIntroProps> = (props) => {
  let navigate = useNavigate();

  const [client, setClient] = useState<Client>({
    additionalInfo: '',
    address: '',
    city: '',
    code: '',           //unnecessary
    deliveryPrice: '',
    email: '',
    id: '',
    items: [],
    logoImage: '',
    name: '',
    paymentMethods: '',
    phoneNumber: '',
    socialMedia: '',
    theme: '',
    type: '',
    _id: '',
    urlName: ''
  });

  const getData = async () => {
    //await axios.get('clients/' + props.data.url).then(result => setClients(result.data));
    await axios.get('storage/' + props.data.client._id).then(result => setClient(result.data[0]));
  };

  useEffect(() => {
    getData();
  }, []);

  props.data.client = client;
  console.log(client);

  return (
    <>
      <Button style={{ margin: "1rem" }} variant="outline-secondary" size="sm" onClick={() => navigate("/adm")}>
        Administrar Conta
      </Button>
      <Container className="containerMain" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <Row xs={1} md={3} className="g-4" style={{ display: "flex", alignItems: "center" }}>
          { Array.from({ length: 3 }).map((_, idx) => (
            <Col>
              <Card className="cardMain" style={{ alignContent: "center" }}>
                <Card.Img className="mainImage" variant="top" src={ idx == 0 ? "pizza.png" : idx == 1 ? "pizzeria.png" : "employee.png" } style={{ padding: "1.5rem" }} />
                <Card.Body>
                  <Card.Title>{ idx == 0 ? "Fazer pedido" : idx == 1 ? "Promoções" : "Sobre nós" }</Card.Title>
                  <Card.Text>
                    { idx == 0 ? "Saboreie nossas pizzas" : idx == 1 ? "Veja nossas promoções" : "Tudo sobre nós" }
                  </Card.Text>
                  {/* { idx == 0 ? <Button variant="primary" onClick={() => navigate("/" + props.data.firstName + "/selector")}>Fazer pedido</Button> : null } */}
                  { idx == 0 ? <Button variant="primary" onClick={() => navigate("/selector")}>Fazer pedido</Button> : null }
                </Card.Body>
              </Card>
            </Col>
          )) }
        </Row>
      </Container>
    </>
  )
};

export default FdPizzaBasicIntro;

/* import React, { FC, useState, useEffect } from 'react';

import { useNavigate } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import axios from '../../axios';

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

interface Data {
  url: string,
  Client: {
    additionalInfo: string,
    address: string,
    code: string, //unnecessary
    email: string,
    id: string,
    name: string,
    phoneNumber: string
    items: Item[],
    type: string
  }
}

interface FdPizzaBasicIntroProps {url: string} //data: Data

const FdPizzaBasicIntro: FC<FdPizzaBasicIntroProps> = (props) => {
  let navigate = useNavigate();
  
  const [client, setClients] = useState<any>({});

  const getData = async () => {
    await axios.get('clients/' + props.url).then(result => setClients(result.data));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Button style={{ margin: "1rem" }} variant="outline-secondary" size="sm" onClick={() => navigate("/adm")}>
        Administrar Conta
      </Button>
      <Container className="containerMain" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <Row xs={1} md={3} className="g-4" style={{ display: "flex" }}>
          { Array.from({ length: 3 }).map((_, idx) => (
            <Col>
              <Card className="cardMain" style={{ alignContent: "center" }}>
                <Card.Img className="mainImage" variant="top" src={ idx == 0 ? "/pizza.png" : idx == 1 ? "/pizzeria.png" : "/employee.png" } style={{ padding: "1.5rem" }} />
                <Card.Body>
                  <Card.Title>{ idx == 0 ? "Fazer pedido" : idx == 1 ? "Promoções" : "Sobre nós" }</Card.Title>
                  <Card.Text>
                  { idx == 0 ? "Saboreie nossas pizzas" : idx == 1 ? "Veja nossas promoções" : "Tudo sobre nós" }
                  </Card.Text>
                  <Button variant="primary" onClick={() => navigate("/selector")}>Fazer pedido</Button>
                </Card.Body>
              </Card>
            </Col>
          )) }
        </Row>
      </Container>
    </div>
  )
};

export default FdPizzaBasicIntro; */