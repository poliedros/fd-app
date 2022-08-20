import React, { FC } from 'react';

import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';

interface FdSelectPizzaProps {}

const FdSelectPizza: FC<FdSelectPizzaProps> = () => (
  <div>
    <Container style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div id="dropdown-basic" style={{
            backgroundColor: "lightgrey",
            padding: "12px",
            borderRadius: "2.5rem",
            width: "90vw",
            position: "absolute",
            top: "94px",
            bottom: "calc(1rem + 37px)"
      }} className="dropdown-toggle-image-small">
        <div className="scrollableContent">
        <Accordion style={{ borderRadius: "1rem", margin: "15px" }}>
          <Accordion.Item eventKey="0" style={{ borderRadius: "1rem" }}>
            <Accordion.Header className="accordion-button-radius" style={{ borderRadius: "1rem", padding: 0 }}>
              <h2 style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>Muçarela</h2>
            </Accordion.Header>
            <Accordion.Body>
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <div>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                </div>
                <Button variant="primary">Go somewhere</Button>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Card style={{
          minHeight: "15vh",
          margin: "15px",
          backgroundImage: "url(https://www.tasteofhome.com/wp-content/uploads/2018/01/Homemade-Pizza_EXPS_HCA20_376_E07_09_2b-2.jpg?fit=700,1024)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}>
          <Card.ImgOverlay>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: "10px" }}>
              <div>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </div>
              <Button variant="primary">Go somewhere</Button>
            </div>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.ImgOverlay>
        </Card>
        </div>
      </div>
    </Container>
    <Container style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ position: "absolute", bottom: "1rem" }}>
        <div id="dropdown-basic" style={{
              backgroundColor: "pink",
              borderStyle: "solid",
              borderWidth: "5px",
              borderColor: "white",
              padding: "12px",
              borderRadius: "100%"
        }} className="dropdown-toggle-image-small">
          <Figure style={{ margin: 0, height: "50px" }}>
            <Figure.Image
              width={50}
              height={50}
              alt=""
              src="./pizza_2.png"
            />
          </Figure>
        </div>
      </div>
    </Container>
  </div>
);

export default FdSelectPizza;
