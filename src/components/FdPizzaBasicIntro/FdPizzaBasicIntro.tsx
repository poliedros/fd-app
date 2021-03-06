import React, { FC, useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import { useNavigate } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { Data } from '../../interfaces/Interfaces';

interface FdPizzaBasicIntroProps { data: Data }

const FdPizzaBasicIntro: FC<FdPizzaBasicIntroProps> = (props) => {

  let navigate = useNavigate();

  const location = useLocation();
  //const data = location.state as Data;
  const [data, setData] = useState(location.state as Data);
  //setData(props.data);

  const [modalShow, setModalShow] = React.useState(false);

  const dataChange = async (item: string) => {
    let copyData = data;
    copyData.firstItem = item;
    setData(copyData);
  };

  useEffect(() => {
    setData(props.data);
  }, [])

  function MyVerticallyCenteredModal(props: any) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <Button onClick={() => { dataChange("Pizza"); /* alert(JSON.stringify(data)); */ navigate("/selector") }}>Pizza</Button>
          <Button onClick={() => { dataChange("Drink"); navigate("/selector") }}>Bebida</Button>
        </Modal.Body>
      </Modal>
    );
  }

  console.log("PROPS2");
  console.log(props);
  console.log(data);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button style={{ margin: "1rem" }} variant="outline-secondary" size="sm" onClick={() => navigate("/adm")}>
          Administrar Conta
        </Button>
      </div>
      <Container className="containerMain" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <Row xs={1} md={3} className="g-4" style={{ display: "flex", alignItems: "center" }}>
          { Array.from({ length: 3 }).map((_, idx) => (
            <Col>
              <Card className="cardMain" style={{ alignContent: "center", textAlign: "center" }}>
                <Card.Img className="mainImage" variant="top" src={ idx == 0 ? "pizza.png" : idx == 1 ? "pizzeria.png" : "employee.png" } style={{ padding: "1.5rem" }} />
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>{ idx == 0 ? "Fazer pedido" : idx == 1 ? "Promo????es" : "Sobre n??s" }</Card.Title>
                  <Card.Text>
                    { idx == 0 ? "Saboreie nossas pizzas" : idx == 1 ? "Veja nossas promo????es" : "Tudo sobre n??s" }
                  </Card.Text>
                  { idx == 0 ? <>
                    <Button variant="primary" onClick={ () => setModalShow(true) }>
                      Fazer Pedido
                    </Button>
                    {/* <Button variant="primary" onClick={() => navigate("/selector")}>Fazer pedido</Button> */}
                  </> : null }
                </Card.Body>
              </Card>
            </Col>
          )) }
        </Row>
      </Container>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
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
                  <Card.Title>{ idx == 0 ? "Fazer pedido" : idx == 1 ? "Promo????es" : "Sobre n??s" }</Card.Title>
                  <Card.Text>
                  { idx == 0 ? "Saboreie nossas pizzas" : idx == 1 ? "Veja nossas promo????es" : "Tudo sobre n??s" }
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