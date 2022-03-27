import React, { FC } from 'react';

import { useNavigate } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import itemsFile from '../../files/items.json';

interface FdPizzaBasicIntroProps {}

const FdPizzaBasicIntro: FC<FdPizzaBasicIntroProps> = () => {
  let navigate = useNavigate();

  const url = window.location.href.split("http://localhost:3000/").pop();

  return (
    <div>
      <Button variant="outline-secondary" size="sm" onClick={() => navigate("/manage")}>
        Administrar Conta
      </Button>
      <Container style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <Row xs={1} md={3} className="g-4" style={{ display: "flex" }}>
          { Array.from({ length: 3 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img variant="top" src="/pizzeria.png" />
                <Card.Body>
                  <Card.Title>{ idx == 0 ? "Pizza" : idx == 1 ? "Bebidas" : "Promoções" }</Card.Title>
                  <Card.Text>
                    Saborei nossas pizzas
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

export default FdPizzaBasicIntro;
