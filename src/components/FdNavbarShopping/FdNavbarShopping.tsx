import React, { FC } from 'react';

import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

interface FdNavbarShoppingProps {}

const FdNavbarShopping: FC<FdNavbarShoppingProps> = () => (
  <div style={{ zIndex: "-1"}}>
    <Navbar>
      <Container style={{ display: "block", flexDirection: "column" }}>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic" style={{
              backgroundColor: "pink",
              borderWidth: "2px",
              borderColor: "white",
              padding: "12px",
              borderRadius: "100%"
        }} className="dropdown-toggle-image-small">
          <img
            src="/pizza.png"
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <Badge pill bg="danger" style={{
            position: "absolute",
            marginLeft: "-15px" }}>
            2
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
          <Dropdown.Item className="dropdown-item-text-no-content" href="#/action-1">
            <h5 style={{ textAlign: "center"}}>
              Sua compra
            </h5>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <Badge pill bg="danger" style={{ marginRight: "20px" }}>1</Badge>
              <div>
              <h6>
                <b>Pizza Muçarela ao Alho</b>
              </h6>
              <p>Sub-total: <b>R$58,40</b></p>
              </div>
            </div>
            <Button variant="outline-secondary" size="sm" style={{ textAlign: "center"}}>Editar Pedido</Button>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <Badge pill bg="danger" style={{ marginRight: "20px" }}>1</Badge>
              <div>
              <h6>
                <b>Pepsi 2L</b>
              </h6>
              <p>Sub-total: <b>R$13,00</b></p>
              </div>
            </div>
            <Button variant="outline-secondary" size="sm" style={{ textAlign: "center"}}>Editar Pedido</Button>
          </Dropdown.Item>
          <Dropdown.Item className="dropdown-item-text-no-content" href="#/action-4" style={{ textAlign: "center"}}>
            <h6><b>Total: R$ <span style={{ fontSize: "1.75rem" }}>71</span><span style={{ fontSize: "1.25rem" }}>,40</span></b></h6>
            <Button variant="success" size="sm">Concluir Pedido</Button>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </Container>
    </Navbar>
  </div>
);

export default FdNavbarShopping;
