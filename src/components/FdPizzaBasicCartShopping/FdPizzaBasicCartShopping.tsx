import React, { FC, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';

import { Data, Product } from '../../interfaces/Interfaces';

interface FdPizzaBasicCartShoppingProps { }

const FdPizzaBasicCartShopping: FC<FdPizzaBasicCartShoppingProps> = () => {

  const location = useLocation();
  const [data, setData] = useState(location.state as Data);

  const [products, setProducts] = useState<Product[]>(data.products);

  let navigate = useNavigate();

  const [index, setIndex] = useState(0);

  console.log("RUMBLE");
  console.log(data);

  const orderRemoveProduct = async (index: number) => {
    let copyData = data;
    const arr = copyData.products.filter(f => f.id !== index);
    copyData.products = arr;
    setProducts(copyData.products);
    console.log(copyData);
    setData(copyData);
  };

  let total = 0;

  useEffect(() => {

  }, [])

  return (
    <>
      <Container style={{ marginTop: "1.5rem" }}>
        <div style={{ textAlign: "left" }}>
          <Button variant="primary" style={{ marginBottom: "1rem" }} onClick={() => { console.log(data); navigate("/selector", { state: data }) }}>Voltar</Button>
        </div>
        <Card
          bg={'secondary'}
          key={'0'}
          text={'white'}
          className="mb-2"
          style={{ textAlign: "center" }}
        >
          <Card.Header>A ver o que temos até agora</Card.Header>
          <Card.Body>
            <Card.Title>Produtos Ingressados</Card.Title>
            <br />
            <Card.Text>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
                {
                  data.products.map((s) =>
                    <Card
                      bg={'dark'}
                      key={'0'}
                      text={'white'}
                      style={{ width: '18rem' }}
                      className="mb-2"
                    >
                      <Card.Header style={{ textAlign: "left" }}>
                        <Button variant="primary" disabled>Editar</Button>
                        {data.products.length < 1 ? <Button variant="primary" style={{ textAlign: "center" }} onClick={() => navigate("/", { state: data })}>Editar</Button> : <span style={{ float: "right" }}>{data.products.length > 1 ? <Button variant="danger" onClick={() => { orderRemoveProduct(s.id) }}>Apagar</Button> : null}</span>}
                      </Card.Header>
                      <Card.Body>
                        <Card.Title>
                          {s.name}{s.half ? ' / ' + s.half : ''}<br />
                        </Card.Title>
                        <Card.Text>
                          cada por R$ {s.price},00{' '}
                          <Badge pill bg="danger">x{s.quantity}</Badge>
                        </Card.Text>
                        <Card.Title> <span style={{ color: "gray", fontSize: "1rem" }}>Subtotal:</span> R$ {s.price * s.quantity},00 </Card.Title>
                        <Card.Text>
                          {s.note}
                        </Card.Text>

                      </Card.Body>
                    </Card>
                  )
                }
              </div>
              {data.products.map((s) => { total += (s.price * s.quantity); return null })}
              <br />
              <Badge pill bg="dark">
                <h4 style={{ color: "white", padding: "3px" }}>Subtotal: R$ {total},00</h4>
              </Badge>
            </Card.Text>
          </Card.Body>
        </Card>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="success" style={{ margin: "1rem" }} onClick={() => navigate("/finalizeTransaction", { state: data })}>Confirmar Checagem das Compras</Button>
        </div>
      </Container>
    </>
  )
};

export default FdPizzaBasicCartShopping;