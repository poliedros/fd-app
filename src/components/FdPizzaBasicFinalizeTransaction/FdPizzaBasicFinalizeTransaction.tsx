import React, { FC, useState } from 'react';

import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import { Order } from "./../../interfaces/Order";

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';
import Collapse from 'react-bootstrap/Collapse';

import InputGroup from 'react-bootstrap/InputGroup';

import emailjs from '@emailjs/browser';
//emailjs("hp3z2x4ntnsRREhFX");

import apiKey from '../../emailkey';

interface FdPizzaBasicFinalizeTransactionProps {}

const FdPizzaBasicFinalizeTransaction: FC<FdPizzaBasicFinalizeTransactionProps> = () => {
   interface Product {
    id: number;
    title: string;
    name: string;
    quantity: string;
    price: number;
    note: string;
  }

  /*interface Order {
    orderId: number;
    delivery: boolean;
    payment: {
      type: string;
      cardBrand: string;
      exchange: number;
    };
    client: {
      name: string;
      phoneNumber: string;
      email: string;
      address: string;
    };
    products: Product[];
  } */

  let navigate = useNavigate();

  const location = useLocation();
  const state = location.state as Product[];

  const [validated, setValidated] = useState(false);

  const [open, setOpen] = useState(false);
  const [openCash, setOpenCash] = useState(false);
  const [openCardBrand, setOpenCardBrand] = useState(false);
  const [openPixCode, setOpenPixCode] = useState(false);

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const [address, setAddress] = useState("");
  const [complementary, setComplementary] = useState("");
  const [city, setCity] = useState("São João del Rei");

  const [delivery, setDelivery] = useState("Retirar no Estabelecimento");

  //const [total, setTotal] = useState(0);

  const [payment, setPayment] = useState("");
  const [exchange, setExchange] = useState(0);
  const [cardBrand, setCardBrand] = useState("Visa");

  console.log("Finalize");
  console.log(state);

  function sendEmail(e: any) {
    console.log('Anderson');
    console.log((exchange > (total + 6)));

    console.log(e);
    console.log(payment == "Em Dinheiro");
    console.log(validated);

    //e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false /* && (exchange > (total + 6)) */) {
      e.preventDefault();
      //e.stopPropagation();
    } else {
      e.preventDefault();
      emailjs.sendForm(apiKey.SERVICE_ID, apiKey.TEMPLATE_ID, e.target, apiKey.USER_ID)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    setValidated(true);
  };

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      //event.stopPropagation();
    } else {
      event.preventDefault();
      emailjs.sendForm(apiKey.SERVICE_ID, apiKey.TEMPLATE_ID, event.target, apiKey.USER_ID)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    console.log("EVENT");
    console.log(event);
    console.log(form.checkValidity());

    setValidated(true);
  };

  /* const handleSubmit = (e: any) => {
    //e.preventDefault(); // Prevents default refresh by the browser
    emailjs.sendForm(`gmail`, apiKey.TEMPLATE_ID, e.target, apiKey.USER_ID)
    .then((result) => {
      alert("Message Sent, We will get back to you shortly"/* , result.text /);
    },
    (error) => {
      alert("An error occurred, Please try again"/* , error.text /);
    });
  }; */

  let total = 0;
  let productsTable = '<table style="width:50%; border: 1px solid white"><tr><th style="border: 1px solid white; background-color: #96D4D4; border-radius: 0.5rem; padding: 0.25rem">Items</th><th style="border: 1px solid white; background-color: #96D4D4; border-radius: 0.5rem; padding: 0.25rem">Qt.</th><th style="border: 1px solid white; background-color: #96D4D4; border-radius: 0.5rem; padding: 0.25rem">Preço</th></tr>';
  let prices = '';
  let finalPrice = 0;
  let numbers = ['1', '2', '3', '4', '5'];

  console.log(numbers);
  
  return (
  <div>
    {/* <form onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */}
    <Container style={{ marginTop: "1.5rem" }}>
      <div style={{ textAlign: "left" }}>
        <Button variant="primary" style={{ marginBottom: "1rem" }} onClick={() => navigate("/cartshopping", { state })}>Voltar</Button>
      </div>
      <Form noValidate validated={validated} onSubmit={ sendEmail } >
      <Card
        bg={'secondary'}
        key={'0'}
        //text={'white'}
        
        className="mb-2"
      >
        <Card.Header style={{ color: "white" }}>Já estamos quase lá</Card.Header>
        <Card.Body>
          <Card.Title style={{ color: "white" }}>Finalizar Pedido</Card.Title>
          <br />
          <Card.Text>
            {/* <Form noValidate validated={validated} onSubmit={ sendEmail } > */}
              { state.map((s) => {
                productsTable += '<tr><td style="border: 1px solid white; background-color: #96D4D4; border-radius: 0.5rem; padding: 0.25rem">' + s.name + '</td><td style="border: 1px solid white; background-color: #96D4D4; border-radius: 0.5rem; text-align: right; padding: 0.25rem">x' + s.quantity + '</td><td style="border: 1px solid white; background-color: #96D4D4; border-radius: 0.5rem; text-align: right; padding: 0.25rem">R$' + (s.price * parseInt(s.quantity)) + ',00' + '</td></tr>';
                prices += 'R$' + (s.price * parseInt(s.quantity)) + ',00' + '\n';
                finalPrice += (s.price * parseInt(s.quantity))
              }) }
              <p hidden>{ productsTable += '<tr><td></td><th style="border: 1px solid white; background-color: #96D4D4; border-radius: 0.5rem; padding: 0.25rem">Total</th><td style="border: 1px solid white; background-color: #96D4D4; border-radius: 0.5rem; text-align: right; padding: 0.25rem"><b>R$' + finalPrice + ',00</b></td></tr></table>' }</p>
              { console.log(productsTable) }
              <input type="hidden" name="orderCode" value="1278AS7" />
              <input type="hidden" name="products" value={ productsTable } />
              <input type="hidden" name="prices" value={ prices } />
              <input type="hidden" name="finalPrice" value={ finalPrice + 6 } />
              <input type="hidden" name="numbers" value={ numbers.join("<br />") } />
              { state.map((s) => { total += (s.price * parseInt(s.quantity)); return null; }) }
              <input type="hidden" name="message" value={ payment == "Em Dinheiro" ? 'Valor do Pedido: R$' + (total + 6) + ',00 - Valor a Receber: R$' + exchange + ',00 - Troco a Entregar: R$' + (exchange - (total + 6)) + ',00' : payment == "Por Cartão" ? 'Valor do Pedido: R$' + (total + 6) + ',00 - Marca do Cartão: ' + cardBrand : payment == "Pix" ? 'Pagado' : '' } />
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Identificação &nbsp;<h4><Badge pill bg="info">{ name }</Badge></h4>&nbsp;<Badge pill bg="dark">{ phoneNumber }{ email ? ' | ' + email : '' }</Badge></Accordion.Header>
                  <Accordion.Body>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Nome</Form.Label>
                        <InputGroup hasValidation>
                        <Form.Control name="name" placeholder="José ou Maria" onChange={ (e) => setName(e.target.value) } required />
                        </InputGroup>
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Número de Contato</Form.Label>
                        <InputGroup hasValidation>
                        <Form.Control name="phoneNumber" placeholder="DDD + número" onChange={ (e) => setPhoneNumber(e.target.value) } required />
                        </InputGroup>
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Col style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Badge pill bg="warning" text="dark"><h6>Caso deseje receber a fatura com informações no seu email, preencha o campo a seguir</h6></Badge>
                      </Col>
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Preencha seu email" onChange={ (e) => setEmail(e.target.value) } />
                        <p>Este campo não é obrigatório</p>
                      </Form.Group>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Entrega &nbsp;<Badge pill bg="dark">{ delivery }{ delivery == "Por Entregador / Delivery" ? address ? ' · ' + address : '' : ''}{ delivery == "Por Entregador / Delivery" ? complementary ? ' (' + complementary + ')' : '' : '' }{ delivery == "Por Entregador / Delivery" ? city ? ' - ' + city : '' : '' }</Badge></Accordion.Header>
                  <Accordion.Body>
                    {/* <Form> */}
                      <div style={{ display: "flex", justifyContent: "center" }}>
                        Retirar no Estabelecimento &nbsp;
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          label="Por Entregador / Delivery"
                          onChange={ () => { setOpen(!open); delivery == "Retirar no Estabelecimento" ? setDelivery("Por Entregador / Delivery") : setDelivery("Retirar no Estabelecimento") } }
                        />
                        
                      </div>
                      {/* <div className="mb-3">
                        <Form.Check
                          inline
                          type="radio"
                          label="Retirar no Estabelecimento"
                          name="getBuy"
                          id="Shop"
                          onClick={ () => { } }
                          //checked={ }
                        />
                        <Form.Check
                          inline
                          type="radio"
                          label="Por Entregor / Delivery"
                          name="getBuy"
                          id="Delivery"
                          onClick={ () => { } }
                          //checked={ }
                        />
                      </div> */}
                      <Collapse in={open}>
                        <Row className="mb-3">
                          <Form.Group as={Col} controlId="formGridAdress">
                            <Form.Label>Endereço (rua, número, completo, bairro)</Form.Label>
                            <InputGroup hasValidation>
                            <Form.Control name="address" placeholder="Rua Min. Gabriel Passos, 199 - Centro" required={ delivery == "Por Entregador / Delivery" } onChange={ (e) => setAddress(e.target.value) } /* disabled */ />
                            </InputGroup>
                          </Form.Group>

                          <Form.Group as={Col} controlId="formGridAdditional">
                            <Form.Label>Complemento / Ponto de Referência / Observações</Form.Label>
                            <Form.Control name="complementary" placeholder="Apto. 203 / Fundos / Próximo ao posto de saúde / ..." /* required={ delivery == "Por Entregador / Delivery" } */ onChange={ (e) => setComplementary(e.target.value) } /* disabled */ />
                          </Form.Group>

                          <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Cidade</Form.Label>
                            <InputGroup hasValidation>
                            <Form.Select name="city" required={ delivery == "Por Entregador / Delivery" } onChange={ (e) => setCity(e.target.value) }/* disabled */>
                              <option>São João del Rei</option>
                              <option>Tiradentes</option>
                            </Form.Select>
                            </InputGroup>
                          </Form.Group>
                        </Row>
                      </Collapse>
                    {/* </Form> */}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Pagamento &nbsp;<Badge pill bg="dark">{ payment + (exchange > 0 && openCash ? ' · R$ ' + exchange + ',00' : '') + (openCardBrand ? ' · ' + cardBrand : '') + (openPixCode ? ' · Código Pix: ' + 'AD13' : '') }</Badge></Accordion.Header>
                  <Accordion.Body>
                    {/* <Form> */}

                      <div className="mb-3">
                        <Form.Check
                          inline
                          type="radio"
                          label="Em Dinheiro"
                          name="payment"
                          id="Cash"
                          //checked={ () => setPayment("Em Dinheiro") }
                          onClick={ () => { setOpenCash(!openCash); setOpenCardBrand(false); setOpenPixCode(false); setPayment("Em Dinheiro") } }
                          //checked={ }
                        />
                        <Form.Check
                          inline
                          type="radio"
                          label="Por Cartão"
                          name="payment"
                          id="Card"
                          onClick={ () => { setOpenCash(false); setOpenCardBrand(!openCardBrand); setOpenPixCode(false); setPayment("Por Cartão") } }
                          //checked={ }
                        />
                        <Form.Check
                          inline
                          type="radio"
                          label="Pix"
                          name="payment"
                          id="Pix"
                          onChange={ () => { setOpenCash(false); setOpenCardBrand(false); setOpenPixCode(!openPixCode); setPayment("Pix") } }
                          //checked={ }
                        />
                      </div>
                      
                      <Collapse in={openCash}>
                        <Row className="mb-3">
                          
                          <Form.Group as={Col} controlId="formGridExchange">
                            <Form.Label>Dinheiro em notas</Form.Label>
                            <InputGroup hasValidation>
                              <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                R$
                                <Form.Control id="exchange" type="number" /* name="exchange" */ placeholder="100" min="0" onChange={ (e) => setExchange(parseInt(e.target.value)) } style={{ width: "100px" }} required={ (payment == "Em Dinheiro") /* && (exchange > (total + 6)) ? true : false */ } /* disabled */ />
                                ,00
                                <Form.Control.Feedback style={{ marginTop: "0" }} >
                                  &nbsp; { total <= exchange ? "true" : "false" }{ total }{ exchange }
                                </Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid" style={{ marginTop: "0" }} >
                                  &nbsp; É necessário por o valor que será entregue para que calculemos o troco.
                                </Form.Control.Feedback>
                              </div>
                            </InputGroup>
                            
                          </Form.Group>

                        </Row>
                      </Collapse>

                      <Collapse in={openCardBrand}>
                        <Row className="mb-3">

                          <Form.Group as={Col} controlId="formGridCard">
                            <Form.Label>Marca</Form.Label>
                            <InputGroup hasValidation>
                            <Form.Select id="Card" required={ payment == "Por Cartão" } onChange={ (e) => setCardBrand(e.target.value) } /* disabled */>
                              <option>Visa</option>
                              <option>MasterCard</option>
                            </Form.Select>

                            <Form.Control.Feedback style={{ marginTop: "0" }} >
                              &nbsp; { 'a' }
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid" style={{ marginTop: "0" }} >
                              &nbsp; É necessário por o valor que será entregue para que calculemos o troco.
                            </Form.Control.Feedback>

                            </InputGroup>
                          </Form.Group>

                        </Row>
                      </Collapse>

                      <Collapse in={openPixCode}>
                        <Row className="mb-3">

                          <Form.Group as={Col} controlId="formGridPixCode">
                            <Form.Label>Código Pix</Form.Label>
                            {/* <Form.Control placeholder="AD13" disabled /> */}
                            <h3><Badge bg="secondary">AD13</Badge></h3>
                          </Form.Group>

                        </Row>
                      </Collapse>

                    {/* </Form> */}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              
              {/* <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button> */}
              {/* <Button variant="primary" type="submit" disabled={ payment == "" }>Enviar</Button> */}
            {/* </Form> */}

            {/* <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="First name"
                    defaultValue="Mark"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Form.Group className="mb-3">
                <Form.Check
                  required
                  label="Agree to terms and conditions"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>
              <Button type="submit">Submit form</Button>
            </Form> */}

          </Card.Text>
        </Card.Body>
        <Card bg={"secondary"} border="danger" style={{ margin: '1rem', marginRight: "3rem", marginLeft: "3rem" }}>
          <Card.Header>Bom Apetite</Card.Header>
          <Card.Body>
            <Card.Title>Sua conta</Card.Title>
            { state.map((s) =>
              <Card.Text style={{ display: "flex", justifyContent: "space-between" }}>
                <Badge pill bg="warning" text="dark">{ s.name } x{ s.quantity }</Badge> <span>R${ s.price * parseInt(s.quantity) },00</span>
              </Card.Text>
            ) }
            <Card.Text style={{ display: "flex", alignItems: "center" , justifyContent: "space-between" }}>
              <b>Entregador</b> <Badge pill bg="light" text="dark">R$6,00</Badge>
            </Card.Text>
            <Card.Title style={{ display: "flex", justifyContent: "space-between" }}>
              {/* { state.map((s) => { total += (s.price * parseInt(s.quantity)); return null; }) } */}
              <h4><b>Total</b></h4> <h3><Badge pill bg="danger" text="dark">R${ total + 6 },00</Badge></h3>
            </Card.Title>
          </Card.Body>
        </Card>
      </Card>
      {/* <Button variant="primary" type="submit" onClick={() => navigate("/cartshopping", { state })}>Voltar</Button> */}
      <Button variant="primary" type="submit" disabled={ payment == "" }>Enviar</Button>
      </Form>
    </Container>
  </div>
)
};

export default FdPizzaBasicFinalizeTransaction;