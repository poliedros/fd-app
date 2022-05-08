import React, { FC, useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";

import { useLocation } from 'react-router-dom';

import './FdPizzaBasicSelect.css';

import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import FormControl from 'react-bootstrap/FormControl';
import Badge from 'react-bootstrap/Badge';
import Figure from 'react-bootstrap/Figure';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Table from 'react-bootstrap/Table';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Overlay from 'react-bootstrap/Overlay';

import itemsFile from '../../files/items.json';
import { getEnvironmentData } from 'worker_threads';

import { Data } from '../../interfaces/Interfaces';

interface FdPizzaBasicSelectProps { data: Data }

const FdPizzaBasicSelect: FC<FdPizzaBasicSelectProps> = (props) => {

  let navigate = useNavigate();

  const location = useLocation();
  const data = location.state as Data;

  console.log(props.data);

  const [products, setProducts] = useState(data != null && data.products != [] ? data.products : [
    {
      type: '',
      image: '',
      description: '',
      id: 1,
      label: '1',
      title: '1',
      name: '',
      half: '',
      quantity: 1,
      price: 0,
      note: ''
    }
  ]);

  const [index, setIndex] = useState(0);

  let verify = true;

  const [show, setShow] = useState(false);
  const target = useRef(null);

  const getIndex = async (idx: number) => {
    setIndex(idx);
  };

  console.log("DATA");
  console.log(data);
  console.log(products);

  const productChangeQuantity = async (v: number) => {
    let copyList = [...products];
    copyList[index].quantity = copyList[index].quantity + v;
    if(copyList[index].quantity == 0)
      orderRemoveProduct();
    else
      setProducts(copyList);
  };

  const orderAddProductValue = async (name:string, price:number) => {
    let copyList = [...products];
    copyList[index].name = name;
    copyList[index].price = price;
    setProducts(copyList);
  };

  const orderRemoveProduct = async () => {
    let copyList = [...products];
      copyList.splice(index, 1);
      setProducts(copyList);
      if(index == products.length-1)
        setIndex(index-1);
  };

  const productChangeHalf = async (half: string, price: number) => {
    let copyList = [...products];
    copyList[index].half = half;
    const prod = itemsFile.items[0].pizza.filter(f => copyList[index].name == f.name);
    if(price == 0)
      copyList[index].price = prod[0].price;
    else
      if(prod[0].price < price)
        copyList[index].price = price;
      else
        copyList[index].price = prod[0].price;
    setProducts(copyList);
  };

  const orderAddNote = async (note:string) => {
    let copyList = [...products];
    copyList[index].note = note;
    setProducts(copyList);
  };

  function findId() {
    let check = false;
    for (let aux = 0; aux < products.length; aux++) {
      for (let i = 0; i < products.length; i++) {
        if(aux == products[i].id)
          check = true;
      }
      if(!check) { return aux; }
      check = false;
    }
    return products.length;
  };
  
  useEffect ( () => {

  }, []);

  return (
    <Container style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}>
      <div style={{ textAlign: "left" }}>
        <Button style={{ marginBottom: "1rem" }} onClick={ () => navigate("/" + props.data.firstName + "/" + props.data.url) }>Retornar ao Início</Button>
      </div>
      <div>
      <Card bg="secondary">
        <Card.Header>
          <DropdownButton style={{ marginBottom: "1rem" }} as={ButtonGroup} title="Adicionar um novo produto" id="bg-nested-dropdown">
            <Dropdown.Item eventKey="1" onClick={ () => { setProducts([...products, { id: findId(), title: 'Pizza ' + (findId() + 1), name: '', half: '', quantity: 1, price: 0, note: '', type: '', image: '', description: '', label: '' }]); setIndex(products.length) } }>Pizza</Dropdown.Item>
            <Dropdown.Item eventKey="2" onClick={ () => { setProducts([...products, { id: findId(), title: 'Soda ' + (findId() + 1), name: '', half: '', quantity: 1, price: 0, note: '', type: '', image: '', description: '', label: '' }]); setIndex(products.length) } }>Bebida</Dropdown.Item>
          </DropdownButton>
          <Nav variant="pills" defaultActiveKey="0">
          { products.map((it, idx) => 
            <Nav.Item>
              <Nav.Link id={ idx.toString() } eventKey={ idx.toString() } onClick={ event => { getIndex(idx) } } active={ idx == index }>{it.title}</Nav.Link>
            </Nav.Item>
          ) }
          </Nav>
        </Card.Header>
        { products[index].title.includes("Pizza") ? 
          <Card.Body>
            <div style={{ textAlign: "right" }}>
              { products.length > 1 ?
                <Button variant="danger" onClick={ () => { orderRemoveProduct() } }>Apagar - { products[index].title }</Button>
              :
                <Button onClick={ () => navigate("/" + props.data.firstName + "/" + props.data.url) }>Retornar ao Início</Button>
              }
            </div>
            <Card.Title style={{ margin: "1rem" }}>Escolha até dois tipos de Pizzas &nbsp;<Badge pill bg="warning" text="dark">{ products[index].name + (products[index].half ? ' / ' + products[index].half : '') }{ products[index].name ? ' x' + products[index].quantity : '' }</Badge></Card.Title>
            <br/>
            <Card.Text>
              <div>
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <Figure>
                      <Figure.Image
                        width={45}
                        height={45}
                        alt="171x180"
                        src="pizza_2.png"
                        style={{ margin: "0 10px 0 0" }}
                      />
                    </Figure>
                    Pizza 1 &nbsp;<Badge pill bg="secondary">{ products[index].name }</Badge>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div>
                      <fieldset>
                        <Form.Group as={Row} className="mb-12">
                          <Col sm={12}>
                          <Table striped responsive hover size="sm">
                              <tbody>
                                { props.data.client.items.filter(f => f.type == "Pizza").map(i => {
                                  return <tr className="align-middle">
                                  <td>
                                    <Form.Check
                                      type="radio"
                                      label=""
                                      name="Pizza"
                                      id={ i.name }
                                      style={{ marginLeft: "10px" }}
                                      onClick={ () => { orderAddProductValue(i.name ?? '', i.price ?? 0); productChangeHalf('', 0) } }
                                      checked={ products[index].name == i.name }
                                    />
                                  </td>
                                  <td>
                                    <Figure.Image
                                      width={45}
                                      height={45}
                                      alt="171x180"
                                      src={ i.image }
                                      style={{ margin: "0 10px 0 0" }}
                                    />
                                  </td>
                                  <td>
                                    <b>{ i.name }</b> { ' ' + i.description }
                                  </td>
                                  <td>
                                    <Badge pill bg="dark" style={{ marginRight: "10px" }}>
                                      R$ { i.price },00
                                    </Badge>
                                  </td>
                                </tr>
                                }) }
                              </tbody>
                            </Table>
                            <div style={{ display: "flex", alignItems: "center" }}>
                            </div>
                          </Col>
                        </Form.Group>
                      </fieldset>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <Figure>
                      <Figure.Image
                        width={45}
                        height={45}
                        alt="171x180"
                        src="pizza_2.png"
                        style={{ margin: "0 10px 0 0" }}
                      />
                    </Figure>
                    Pizza 2 &nbsp;<Badge pill bg="secondary">{ products[index].half }</Badge>
                  </Accordion.Header>
                  <Accordion.Body>
                  <div>
                      <fieldset>
                        <Form.Group as={Row} className="mb-12">
                          <Col sm={12}>
                            <Table striped responsive hover size="sm">
                              <tbody>
                                <tr className="align-middle">
                                  <td>
                                    <Form.Check
                                      type="radio"
                                      label=""
                                      name="Pizza-2"
                                      id="NoPizza"
                                      style={{ marginLeft: "10px" }}
                                      onClick={ () => { productChangeHalf('', 0) } }
                                      checked={ products[index].half == "" }
                                    />
                                  </td>
                                  <td>
                                    
                                  </td>
                                  <td>
                                    Não Selecionar
                                  </td>
                                  <td>
                                    
                                  </td>
                                </tr>
                                { props.data.client.items.filter( f => f.type == 'Pizza' && products[index].name != '' && f.name != products[index].name).map(i => {
                                  return <tr className="align-middle">
                                  <td>
                                    <Form.Check
                                      type="radio"
                                      label=""
                                      name="Pizza-2"
                                      id={ i.name }
                                      style={{ marginLeft: "10px" }}
                                      onClick={ () => { productChangeHalf(i.name ?? '', i.price ?? 0) } }
                                      checked={ products[index].half == i.name }
                                    />
                                  </td>
                                  <td>
                                    <Figure.Image
                                      width={45}
                                      height={45}
                                      alt="171x180"
                                      src={ i.image }
                                      style={{ margin: "0 10px 0 0" }}
                                    />
                                  </td>
                                  <td>
                                    <b>{ i.name }</b> { ' ' + i.description }
                                  </td>
                                  <td>
                                    <Badge pill bg="dark" style={{ marginRight: "10px" }}>
                                      R$ { i.price },00
                                    </Badge>
                                  </td>
                                </tr>
                                }) }
                              </tbody>
                            </Table>
                            <div style={{ display: "flex", alignItems: "center" }}>
                            </div>
                          </Col>
                        </Form.Group>
                      </fieldset>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Borda</Accordion.Header>
                  <Accordion.Body>
                    Lorem.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Adicional</Accordion.Header>
                  <Accordion.Body>
                    Lorem.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              </div>
              <div style={{ display: "flex", alignItems: "center", marginTop: "1rem" }}>
                <InputGroup className="mb-3">
                  <Button variant="danger" id="button-addon1"
                    onClick={
                      () => products[index].quantity > 0
                      ? (products.length == 1 && products[index].quantity == 1) ?
                      navigate("/" + props.data.firstName + "/" + props.data.url) : productChangeQuantity(-1)
                      : null } style={{ width: "45px" }}>
                    <b>-</b>
                  </Button>
                  <FormControl style={{ width: "45px", flex: "none" }}
                    placeholder={ products[index].quantity.toString() } disabled
                    aria-describedby="basic-addon1"
                  />
                  <Button variant="success" id="button-addon2" onClick={ () => products[index].quantity < 99
                    ? productChangeQuantity(1) : null } style={{ width: "45px" }}>
                    <b>+</b>
                  </Button>
                </InputGroup>
                <Badge bg="light" text="dark"><h4>Subtotal: R$ { (products[index].quantity * products[index].price) },00</h4></Badge>
              </div>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Observações:</Form.Label>
                <Form.Control as="textarea" id="observ" rows={3} value={products[index].note ? products[index].note : ''} onChange={ (e) => { orderAddNote(e.currentTarget.value ?? '') }} />
              </Form.Group>
            </Card.Text>
          </Card.Body>
        : 
          <Card.Body>
            <div style={{ textAlign: "right" }}>
            { products.length > 1 ?
              <Button variant="danger" onClick={ () => { orderRemoveProduct() } }>Apagar - { products[index].title }</Button>
            :
              <Button onClick={ () => navigate("/" + props.data.firstName + "/" + props.data.url) }>Retornar ao Início</Button>
            }
            </div>
            <Card.Title>Escolha uma Bebida &nbsp;<Badge pill bg="warning" text="dark">{ products[index].name }{ products[index].name ? ' x' + products[index].quantity : null }</Badge></Card.Title>
            <br/>
            <Card.Text>
              <div>
                <Accordion flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <Figure>
                        <Figure.Image
                          width={45}
                          height={45}
                          alt="171x180"
                          src="soda.png"
                          style={{ margin: "0 10px 0 0" }}
                        />
                      </Figure>
                      Refrigerante 1L
                    </Accordion.Header>
                    <Accordion.Body>
                      <div>
                        <fieldset>
                          <Form.Group as={Row} className="mb-12">
                            <Col sm={12}>
                            <Table striped responsive hover size="sm">
                                <tbody>
                                  { itemsFile.items[0].drinks.filter( f => f.type == "1L" ).map( d => {
                                    return <tr className="align-middle">
                                    <td>
                                      <Form.Check
                                        type="radio"
                                        label=""
                                        name="Refri"
                                        id={ d.name }
                                        onClick={ () => { orderAddProductValue(d.name, d.price) } }
                                        checked={ products[index].name == d.name }
                                      />
                                    </td>
                                    <td>
                                      <Figure.Image
                                        width={45}
                                        height={45}
                                        alt="171x180"
                                        src={ d.image }
                                        style={{ margin: "0 10px 0 0" }}
                                      />
                                    </td>
                                    <td>
                                      <b>{ d.name }</b> { d.description }
                                    </td>
                                    <td>
                                      <Badge pill bg="dark">
                                        R$ { d.price },00
                                      </Badge>
                                    </td>
                                  </tr>
                                  }) }
                                </tbody>
                              </Table>
                            </Col>
                          </Form.Group>
                        </fieldset>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <Figure>
                        <Figure.Image
                          width={45}
                          height={45}
                          alt="171x180"
                          src="soda.png"
                          style={{ margin: "0 10px 0 0" }}
                        />
                      </Figure>
                      Refrigerante 2L
                    </Accordion.Header>
                    <Accordion.Body>
                      <div>
                        <fieldset>
                          <Form.Group as={Row} className="mb-12">
                            <Col sm={12}>
                            <Table striped responsive hover size="sm">
                                <tbody>
                                  { itemsFile.items[0].drinks.filter(f => f.type == "2L").map( d=> {
                                    return <tr className="align-middle">
                                    <td>
                                      <Form.Check
                                        type="radio"
                                        label=""
                                        name="Refri"
                                        id={ d.name }
                                        onClick={ () => { orderAddProductValue(d.name, d.price) } }
                                        checked={ products[index].name == d.name }
                                      />
                                    </td>
                                    <td>
                                      <Figure.Image
                                        width={45}
                                        height={45}
                                        alt="171x180"
                                        src={ d.image }
                                        style={{ margin: "0 10px 0 0" }}
                                      />
                                    </td>
                                    <td>
                                      <b>{ d.name }</b> { d.description }
                                    </td>
                                    <td>
                                      <Badge pill bg="dark">
                                        R$ { d.price },00
                                      </Badge>
                                    </td>
                                  </tr>
                                  })}
                                </tbody>
                              </Table>
                            </Col>
                          </Form.Group>
                        </fieldset>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <Figure>
                        <Figure.Image
                          width={45}
                          height={45}
                          alt="171x180"
                          src="soda.png"
                          style={{ margin: "0 10px 0 0" }}
                        />
                      </Figure>
                      Vinho
                    </Accordion.Header>
                    <Accordion.Body>
                    <div>
                        <fieldset>
                          <Form.Group as={Row} className="mb-12">
                            <Col sm={12}>
                            <Table striped responsive hover size="sm">
                                <tbody>
                                  { itemsFile.items[0].drinks.filter(f => f.type == "Wine").map(
                                    d => { return <tr className="align-middle">
                                    <td>
                                      <Form.Check
                                        type="radio"
                                        label=""
                                        name="Refri"
                                        id={ d.name }
                                        onClick={ () => { orderAddProductValue(d.name, d.price) } }
                                        checked={ products[index].name ==  d.name  }
                                      />
                                    </td>
                                    <td>
                                      <Figure.Image
                                        width={45}
                                        height={45}
                                        alt="171x180"
                                        src={ d.image }
                                        style={{ margin: "0 10px 0 0" }}
                                      />
                                    </td>
                                    <td>
                                      Vinho <b>{ d.name }</b> { d.description }
                                    </td>
                                    <td>
                                      <Badge pill bg="dark">
                                        R$ { d.price },90
                                      </Badge>
                                    </td>
                                  </tr>
                                    
                                    } 
                                  ) }
                                </tbody>
                              </Table>
                            </Col>
                          </Form.Group>
                        </fieldset>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <div style={{ display: "flex", alignItems: "center", marginTop: "1rem" }}>
                <InputGroup className="mb-3">
                  <Button variant="danger" id="button-addon1" onClick={ () => products[index].quantity > 0 ? productChangeQuantity(-1) : null } style={{ width: "45px" }}>
                    <b>-</b>
                  </Button>
                  <FormControl style={{ width: "45px", flex: "none" }}
                    placeholder={ products[index].quantity.toString() } disabled
                    aria-describedby="basic-addon1"
                  />
                  <Button variant="success" id="button-addon2" onClick={ () => products[index].quantity < 99
                    ? productChangeQuantity(1) : null } style={{ width: "45px" }}>
                    <b>+</b>
                  </Button>
                </InputGroup>
                <ButtonGroup aria-label="Basic example" vertical>
                  <Button variant="primary">Left</Button>
                  <Button variant="primary">Middle</Button>
                  <Button variant="primary">Right</Button>
                </ButtonGroup>
                <Badge bg="light" text="dark"><h4>Subtotal: R$ { (products[index].quantity * products[index].price) },00</h4></Badge>
              </div>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Observações:</Form.Label>
                <Form.Control as="textarea" id="observ" rows={3} value={products[index].note ? products[index].note : ''} onChange={ (e) => { orderAddNote(e.currentTarget.value ?? '') }} />
              </Form.Group>
            </Card.Text>
          </Card.Body>
        }
      </Card>
        { products.map( s => s.price > 0 ? null : verify = false ) }
        { verify ?
        /* <Button variant="success" style={{ marginTop: "1rem" }} onClick={ () => { props.data.products = products; navigate("/" + props.data.firstName + "/cartshopping", { state: props.data }) }  }>Confirmar Lista de Compra</Button> */
        <Button variant="success" style={{ marginTop: "1rem" }} onClick={ () => { props.data.products = products; navigate("/cartshopping", { state: props.data }) }  }>Confirmar Lista de Compra</Button>
        : <><Button variant="success" style={{ marginTop: "1rem" }} ref={target} onClick={() => setShow(!show)}>Confirmar Lista de Compra</Button>
        <Overlay target={target.current} show={show} placement="right">
          {({ placement, arrowProps, show: _show, popper, ...props }) => (
            <div
              {...props}
              style={{
                backgroundColor: 'rgba(255, 100, 100, 0.85)',
                padding: '2px 10px',
                marginLeft: '10px',
                color: 'white',
                borderRadius: 3,
                ...props.style,
              }}
            >
              Selecione todos os produtos
            </div>
          )}
        </Overlay></> }
      </div>
    </Container>
  );
};

export default FdPizzaBasicSelect;

/* import React, { FC, useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";

import axios from '../../axios';

import { useLocation } from 'react-router-dom';

import './FdPizzaBasicSelect.css';

import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import FormControl from 'react-bootstrap/FormControl';
import Badge from 'react-bootstrap/Badge';
import Figure from 'react-bootstrap/Figure';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Table from 'react-bootstrap/Table';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Overlay from 'react-bootstrap/Overlay';

import itemsFile from '../../files/items.json';

interface FdPizzaBasicSelectProps { client: { urlName: string; name: string; logo: string; code: string; } }

const FdPizzaBasicSelect: FC<FdPizzaBasicSelectProps> = (client) => {

  interface Product {
    type: string;
    image: string | undefined;
    description: string;
    id: number;
    title: string;
    name: string;
    half: string;
    quantity: string;
    price: number;
    note: string;
  }

  let navigate = useNavigate();

  const location = useLocation();
  const state = location.state as Product[];

  const [sProduct, setSProduct] = useState({ id: 0, title: 'Pizza 1', name: '', half: '', quantity: '1', price: 0, note: '' });

  const [products, setProducts] = useState<Product[]>([]);

  const getData = async () => {
    const {data} = await axios.get('clients/PizzaABeca/items');
    setProducts(data);
    setSList2(data);
  };

  useEffect(() => {
    getData();
  }, products);

  const [sList, setSList] = useState(state != null ? state : [sProduct]);
  const [sList2, setSList2] = useState(products);

  const [index, setIndex] = useState(0);

  const url = window.location.href.split("http://localhost:3000/").pop();

  let verify = true;

  const [show, setShow] = useState(false);
  const target = useRef(null);

  const getIndex = async (idx: number) => {
    setIndex(idx);
  };

  const productChangeQuantity = async (v: number) => {
    let copyList = [...sList];
    copyList[index].quantity = (parseInt(copyList[index].quantity) + v).toString();
    if(copyList[index].quantity == "0")
      orderRemoveProduct();
    else
      setSList(copyList);
  };

  const orderAddProductValue = async (name:string, price:number) => {
    let copyList = [...sList];
    copyList[index].name = name;
    copyList[index].price = price;
    setSList(copyList);
  };

  const orderRemoveProduct = async () => {
    let copyList = [...sList];
      copyList.splice(index, 1);
      setSList(copyList);
      if(index == sList.length-1)
        setIndex(index-1);
  };

  const productChangeHalf = async (half: string, price: number) => {
    let copyList = [...sList];
    copyList[index].half = half;
    const prod = itemsFile.items[0].pizza.filter(f => copyList[index].name == f.name);
    if(price == 0)
      copyList[index].price = prod[0].price;
    else
      if(prod[0].price < price)
        copyList[index].price = price;
      else
        copyList[index].price = prod[0].price;
    setSList(copyList);
  };

  const orderAddNote = async (note:string) => {
    let copyList = [...sList];
    copyList[index].note = note;
    setSList(copyList);
  };

  function findId() {
    let check = false;
    for (let aux = 0; aux < sList.length; aux++) {
      for (let i = 0; i < sList.length; i++) {
        if(aux == sList[i].id)
          check = true;
      }
      if(!check) { return aux; }
      check = false;
    }
    return sList.length;
  };
  
  useEffect ( () => {
    
  }, sList);

  return (
    <Container style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}>
      <div style={{ textAlign: "left" }}>
        <Button style={{ marginBottom: "1rem" }} onClick={ () => navigate("/") }>Retornar ao Início</Button>
      </div>
      <div>
      <Card bg="secondary">
        <Card.Header>
          <DropdownButton style={{ marginBottom: "1rem" }} as={ButtonGroup} title="Adicionar um novo produto" id="bg-nested-dropdown">
            <Dropdown.Item eventKey="1" onClick={ () => { setSList([...sList, { id: findId(), title: 'Pizza ' + (findId() + 1), name: '', half: '', quantity: '1', price: 0, note: '' }]); setIndex(sList.length) } }>Pizza</Dropdown.Item>
            <Dropdown.Item eventKey="2" onClick={ () => { setSList([...sList, { id: findId(), title: 'Soda ' + (findId() + 1), name: '', half: '', quantity: '1', price: 0, note: '' }]); setIndex(sList.length) } }>Bebida</Dropdown.Item>
          </DropdownButton>
          <Nav variant="pills" defaultActiveKey="0">
          { sList.map((it, idx) => 
            <Nav.Item>
              <Nav.Link id={ idx.toString() } eventKey={ idx.toString() } onClick={ event => { getIndex(idx) } } active={ idx == index }>{it.title}</Nav.Link>
            </Nav.Item>
          ) }
          </Nav>
        </Card.Header>
        { sList[index].title.includes("Pizza") ? 
          <Card.Body>
            <div style={{ textAlign: "right" }}>
              { sList.length > 1 ?
                <Button variant="danger" onClick={ () => { orderRemoveProduct() } }>Apagar - { sList[index].title }</Button>
              :
                <Button onClick={ () => navigate("/") }>Retornar ao Início</Button>
              }
            </div>
            <Card.Title style={{ margin: "1rem" }}>Escolha até dois tipos de Pizzas &nbsp;<Badge pill bg="warning" text="dark">{ sList[index].name + (sList[index].half ? ' / ' + sList[index].half : '') }{ sList[index].name ? ' x' + sList[index].quantity : '' }</Badge></Card.Title>
            <br/>
            <Card.Text>
              <div>
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <Figure>
                      <Figure.Image
                        width={45}
                        height={45}
                        alt="171x180"
                        src="pizza_2.png"
                        style={{ margin: "0 10px 0 0" }}
                      />
                    </Figure>
                    Pizza 1 &nbsp;<Badge pill bg="secondary">{ sList[index].name }</Badge>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div>
                      <fieldset>
                        <Form.Group as={Row} className="mb-12">
                          <Col sm={12}>
                          <Table striped responsive hover size="sm">
                              <tbody>
                                { sList2.filter(f => f.type == "Pizza").map(i => {
                                  return <tr className="align-middle">
                                  <td>
                                    <Form.Check
                                      type="radio"
                                      label=""
                                      name="Pizza"
                                      id={ i.name }
                                      style={{ marginLeft: "10px" }}
                                      onClick={ () => { orderAddProductValue(i.name ?? '', i.price ?? 0); productChangeHalf('', 0) } }
                                      checked={ sList[index].name == i.name }
                                    />
                                  </td>
                                  <td>
                                    <Figure.Image
                                      width={45}
                                      height={45}
                                      alt="171x180"
                                      src={ i.image }
                                      style={{ margin: "0 10px 0 0" }}
                                    />
                                  </td>
                                  <td>
                                    <b>{ i.name }</b> { ' ' + i.description }
                                  </td>
                                  <td>
                                    <Badge pill bg="dark" style={{ marginRight: "10px" }}>
                                      R$ { i.price },00
                                    </Badge>
                                  </td>
                                </tr>
                                }) }
                              </tbody>
                            </Table>
                            <div style={{ display: "flex", alignItems: "center" }}>
                            </div>
                          </Col>
                        </Form.Group>
                      </fieldset>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <Figure>
                      <Figure.Image
                        width={45}
                        height={45}
                        alt="171x180"
                        src="pizza_2.png"
                        style={{ margin: "0 10px 0 0" }}
                      />
                    </Figure>
                    Pizza 2 &nbsp;<Badge pill bg="secondary">{ sList[index].half }</Badge>
                  </Accordion.Header>
                  <Accordion.Body>
                  <div>
                      <fieldset>
                        <Form.Group as={Row} className="mb-12">
                          <Col sm={12}>
                            <Table striped responsive hover size="sm">
                              <tbody>
                                <tr className="align-middle">
                                  <td>
                                    <Form.Check
                                      type="radio"
                                      label=""
                                      name="Pizza-2"
                                      id="NoPizza"
                                      style={{ marginLeft: "10px" }}
                                      onClick={ () => { productChangeHalf('', 0) } }
                                      checked={ sList[index].half == "" }
                                    />
                                  </td>
                                  <td>
                                    
                                  </td>
                                  <td>
                                    Não Selecionar
                                  </td>
                                  <td>
                                    
                                  </td>
                                </tr>
                                { itemsFile.items[0].pizza.filter( f => sList[index].name != '' && f.name != sList[index].name).map(i => {
                                  return <tr className="align-middle">
                                  <td>
                                    <Form.Check
                                      type="radio"
                                      label=""
                                      name="Pizza-2"
                                      id={ i.name }
                                      style={{ marginLeft: "10px" }}
                                      onClick={ () => { productChangeHalf(i.name ?? '', i.price ?? 0) } }
                                      checked={ sList[index].half == i.name }
                                    />
                                  </td>
                                  <td>
                                    <Figure.Image
                                      width={45}
                                      height={45}
                                      alt="171x180"
                                      src={ i.image }
                                      style={{ margin: "0 10px 0 0" }}
                                    />
                                  </td>
                                  <td>
                                    <b>{ i.name }</b> { ' ' + i.description }
                                  </td>
                                  <td>
                                    <Badge pill bg="dark" style={{ marginRight: "10px" }}>
                                      R$ { i.price },00
                                    </Badge>
                                  </td>
                                </tr>
                                }) }
                              </tbody>
                            </Table>
                            <div style={{ display: "flex", alignItems: "center" }}>
                            </div>
                          </Col>
                        </Form.Group>
                      </fieldset>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Borda</Accordion.Header>
                  <Accordion.Body>
                    Lorem.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Adicional</Accordion.Header>
                  <Accordion.Body>
                    Lorem.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              </div>
              <div style={{ display: "flex", alignItems: "center", marginTop: "1rem" }}>
                <InputGroup className="mb-3">
                  <Button variant="danger" id="button-addon1"
                    onClick={
                      () => parseInt(sList[index].quantity) > 0
                      ? (sList.length == 1 && parseInt(sList[index].quantity) == 1) ?
                      navigate("/") : productChangeQuantity(-1)
                      : null } style={{ width: "45px" }}>
                    <b>-</b>
                  </Button>
                  <FormControl style={{ width: "45px", flex: "none" }}
                    placeholder={ sList[index].quantity } disabled
                    aria-describedby="basic-addon1"
                  />
                  <Button variant="success" id="button-addon2" onClick={ () => parseInt(sList[index].quantity) < 99
                    ? productChangeQuantity(1) : null } style={{ width: "45px" }}>
                    <b>+</b>
                  </Button>
                </InputGroup>
                <Badge bg="light" text="dark"><h4>Subtotal: R$ { (parseInt(sList[index].quantity) * sList[index].price) },00</h4></Badge>
              </div>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Observações:</Form.Label>
                <Form.Control as="textarea" id="observ" rows={3} value={sList[index].note ? sList[index].note : ''} onChange={ (e) => { orderAddNote(e.currentTarget.value ?? '') }} />
              </Form.Group>
            </Card.Text>
          </Card.Body>
        : 
          <Card.Body>
            <div style={{ textAlign: "right" }}>
            { sList.length > 1 ?
              <Button variant="danger" onClick={ () => { orderRemoveProduct() } }>Apagar - { sList[index].title }</Button>
            :
              <Button onClick={ () => navigate("/") }>Retornar ao Início</Button>
            }
            </div>
            <Card.Title>Escolha uma Bebida &nbsp;<Badge pill bg="warning" text="dark">{ sList[index].name }{ sList[index].name ? ' x' + sList[index].quantity : null }</Badge></Card.Title>
            <br/>
            <Card.Text>
              <div>
                <Accordion flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <Figure>
                        <Figure.Image
                          width={45}
                          height={45}
                          alt="171x180"
                          src="soda.png"
                          style={{ margin: "0 10px 0 0" }}
                        />
                      </Figure>
                      Refrigerante 1L
                    </Accordion.Header>
                    <Accordion.Body>
                      <div>
                        <fieldset>
                          <Form.Group as={Row} className="mb-12">
                            <Col sm={12}>
                            <Table striped responsive hover size="sm">
                                <tbody>
                                  { itemsFile.items[0].drinks.filter( f => f.type == "1L" ).map( d => {
                                    return <tr className="align-middle">
                                    <td>
                                      <Form.Check
                                        type="radio"
                                        label=""
                                        name="Refri"
                                        id={ d.name }
                                        onClick={ () => { orderAddProductValue(d.name, d.price) } }
                                        checked={ sList[index].name == d.name }
                                      />
                                    </td>
                                    <td>
                                      <Figure.Image
                                        width={45}
                                        height={45}
                                        alt="171x180"
                                        src={ d.image }
                                        style={{ margin: "0 10px 0 0" }}
                                      />
                                    </td>
                                    <td>
                                      <b>{ d.name }</b> { d.description }
                                    </td>
                                    <td>
                                      <Badge pill bg="dark">
                                        R$ { d.price },00
                                      </Badge>
                                    </td>
                                  </tr>
                                  }) }
                                </tbody>
                              </Table>
                            </Col>
                          </Form.Group>
                        </fieldset>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <Figure>
                        <Figure.Image
                          width={45}
                          height={45}
                          alt="171x180"
                          src="soda.png"
                          style={{ margin: "0 10px 0 0" }}
                        />
                      </Figure>
                      Refrigerante 2L
                    </Accordion.Header>
                    <Accordion.Body>
                      <div>
                        <fieldset>
                          <Form.Group as={Row} className="mb-12">
                            <Col sm={12}>
                            <Table striped responsive hover size="sm">
                                <tbody>
                                  { itemsFile.items[0].drinks.filter(f => f.type == "2L").map( d=> {
                                    return <tr className="align-middle">
                                    <td>
                                      <Form.Check
                                        type="radio"
                                        label=""
                                        name="Refri"
                                        id={ d.name }
                                        onClick={ () => { orderAddProductValue(d.name, d.price) } }
                                        checked={ sList[index].name == d.name }
                                      />
                                    </td>
                                    <td>
                                      <Figure.Image
                                        width={45}
                                        height={45}
                                        alt="171x180"
                                        src={ d.image }
                                        style={{ margin: "0 10px 0 0" }}
                                      />
                                    </td>
                                    <td>
                                      <b>{ d.name }</b> { d.description }
                                    </td>
                                    <td>
                                      <Badge pill bg="dark">
                                        R$ { d.price },00
                                      </Badge>
                                    </td>
                                  </tr>
                                  })}
                                </tbody>
                              </Table>
                            </Col>
                          </Form.Group>
                        </fieldset>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <Figure>
                        <Figure.Image
                          width={45}
                          height={45}
                          alt="171x180"
                          src="soda.png"
                          style={{ margin: "0 10px 0 0" }}
                        />
                      </Figure>
                      Vinho
                    </Accordion.Header>
                    <Accordion.Body>
                    <div>
                        <fieldset>
                          <Form.Group as={Row} className="mb-12">
                            <Col sm={12}>
                            <Table striped responsive hover size="sm">
                                <tbody>
                                  { itemsFile.items[0].drinks.filter(f => f.type == "Wine").map(
                                    d => { return <tr className="align-middle">
                                    <td>
                                      <Form.Check
                                        type="radio"
                                        label=""
                                        name="Refri"
                                        id={ d.name }
                                        onClick={ () => { orderAddProductValue(d.name, d.price) } }
                                        checked={ sList[index].name ==  d.name  }
                                      />
                                    </td>
                                    <td>
                                      <Figure.Image
                                        width={45}
                                        height={45}
                                        alt="171x180"
                                        src={ d.image }
                                        style={{ margin: "0 10px 0 0" }}
                                      />
                                    </td>
                                    <td>
                                      Vinho <b>{ d.name }</b> { d.description }
                                    </td>
                                    <td>
                                      <Badge pill bg="dark">
                                        R$ { d.price },90
                                      </Badge>
                                    </td>
                                  </tr>
                                    
                                    } 
                                  ) }
                                </tbody>
                              </Table>
                            </Col>
                          </Form.Group>
                        </fieldset>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <div style={{ display: "flex", alignItems: "center", marginTop: "1rem" }}>
                <InputGroup className="mb-3">
                  <Button variant="danger" id="button-addon1" onClick={ () => parseInt(sList[index].quantity) > 0 ? productChangeQuantity(-1) : null } style={{ width: "45px" }}>
                    <b>-</b>
                  </Button>
                  <FormControl style={{ width: "45px", flex: "none" }}
                    placeholder={ sList[index].quantity } disabled
                    aria-describedby="basic-addon1"
                  />
                  <Button variant="success" id="button-addon2" onClick={ () => parseInt(sList[index].quantity) < 99
                    ? productChangeQuantity(1) : null } style={{ width: "45px" }}>
                    <b>+</b>
                  </Button>
                </InputGroup>
                <Badge bg="light" text="dark"><h4>Subtotal: R$ { (parseInt(sList[index].quantity) * sList[index].price) },00</h4></Badge>
              </div>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Observações:</Form.Label>
                <Form.Control as="textarea" id="observ" rows={3} value={sList[index].note ? sList[index].note : ''} onChange={ (e) => { orderAddNote(e.currentTarget.value ?? '') }} />
              </Form.Group>
            </Card.Text>
          </Card.Body>
        }
      </Card>
        { sList.map( s => s.price > 0 ? null : verify = false ) }
        { verify ?
        <Button variant="success" style={{ marginTop: "1rem" }} onClick={ () =>  navigate("/cartshopping", { state: sList })  }>Confirmar Lista de Compra</Button>
        : <><Button variant="success" style={{ marginTop: "1rem" }} ref={target} onClick={() => setShow(!show)}>Confirmar Lista de Compra</Button>
        <Overlay target={target.current} show={show} placement="right">
          {({ placement, arrowProps, show: _show, popper, ...props }) => (
            <div
              {...props}
              style={{
                backgroundColor: 'rgba(255, 100, 100, 0.85)',
                padding: '2px 10px',
                marginLeft: '10px',
                color: 'white',
                borderRadius: 3,
                ...props.style,
              }}
            >
              Complete todos os campos
            </div>
          )}
        </Overlay></> }
      </div>
    </Container>
  );
};

export default FdPizzaBasicSelect; */