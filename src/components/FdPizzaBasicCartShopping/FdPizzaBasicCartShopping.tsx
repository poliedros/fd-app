import React, { FC, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/esm/Badge';

const useForceUpdate = () => useState()[1];

interface FdPizzaBasicCartShoppingProps {}

const FdPizzaBasicCartShopping: FC<FdPizzaBasicCartShoppingProps> = () => {
  interface Product {
    id: number;
    title: string;
    name: string;
    half: string;
    quantity: string;
    price: number;
    note: string;
  }
  
  const location = useLocation();
  const [state, setState] = useState(location.state as Product[]);

  let navigate = useNavigate();

  /* const [value, setValue] = useState(state);

  const getValue = async () => {
    setValue(state);
  };

  useEffect ( () => {
    getValue();
    console.log("STATE");
    console.log(state);
  }, value); */

  /* const forceUpdate = useForceUpdate(); */

  /*  function useForceUpdate(){
      return () => setValue(state);
  }

  const forceUpdate = useForceUpdate(); */

  const [index, setIndex] = useState(0);

  const orderRemoveProduct = async (index: number) => {
    let copyList = [...state];
      const arr = copyList.filter(f => f.id !== index);
      setState(arr);
  };

  let total = 0;

  return (
    <div>
      { console.log("WWW") }
      { console.log(state) }
      {/* { forceUpdate } */}
      {/* <p style={{ color: "white" }}>{
        state.length
      }</p> */}
      <Container style={{ marginTop: "1.5rem" }}>
        <p>{ window.location.href }</p>
        <div style={{ textAlign: "left" }}>
          <Button variant="primary" style={{ marginBottom: "1rem" }} onClick={() => navigate("/selector", { state })}>Voltar</Button>
        </div>
        <Card
          bg={'secondary'}
          key={'0'}
          text={'white'}
          //style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>A ver o que temos até agora</Card.Header>
          <Card.Body>
            <Card.Title>Produtos Ingressados</Card.Title>
            <br />
            <Card.Text>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
                {
                  state.map((s) => 
                    <Card
                      bg={'dark'}
                      key={'0'}
                      text={'white'}
                      style={{ width: '18rem' }}
                      className="mb-2"
                    >
                      <Card.Header style={{ textAlign: "left" }}>
                        <Button variant="primary" disabled>Editar</Button>
                        { state.length < 1 ? <Button variant="primary" style={{ textAlign: "center" }} onClick={ () => navigate("/", { state })}>Editar</Button> : <span style={{ float: "right" }}>{ state.length > 1 ? <Button variant="danger" onClick={ () => { orderRemoveProduct(s.id) } }>Apagar</Button> : null }</span> }
                      </Card.Header>
                      <Card.Body>
                        <Card.Title>
                          { s.name }{ s.half ? ' / ' + s.half : '' }<br/>
                        </Card.Title>
                        <Card.Text>
                          cada por R$ { s.price },00{' '}
                          <Badge pill bg="danger">x{ s.quantity }</Badge>
                        </Card.Text>
                        <Card.Title> <span style={{ color: "gray", fontSize: "1rem" }}>Subtotal:</span> R$ { s.price * parseInt(s.quantity) },00 </Card.Title>
                        <Card.Text>
                          { s.note }
                        </Card.Text>
                        
                      </Card.Body>
                    </Card>
                  )
                }
              </div>
              { state.map((s) => { total += (s.price * parseInt(s.quantity)); return null }) }
              <br />
              <Badge pill bg="dark">
                <h4 style={{ color: "white", padding: "3px" }}>Subtotal: R$ {total},00</h4>
              </Badge>
            </Card.Text>
          </Card.Body>
        </Card>
        <Button variant="success" style={{ marginTop: "1rem" }} onClick={() => navigate("/finalizeTransaction", { state })}>Confirmar Checagem das Compras</Button>
      </Container>
      {/* <Button variant="primary" onClick={ () => forceUpdate }>Update</Button> */}
    </div>
  )
};

export default FdPizzaBasicCartShopping;