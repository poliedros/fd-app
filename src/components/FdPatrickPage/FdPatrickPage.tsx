import React, { FC } from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import Carousel from 'react-bootstrap/Carousel';
import Stack from 'react-bootstrap/Stack';

import "./FdPatrickPage.css";

interface FdPatrickPageProps {}

const FdPatrickPage: FC<FdPatrickPageProps> = () => (
  <div>

    <div style={{ height: "100vh", backgroundImage: "url(https://images.ctfassets.net/gaj9ykzzdayp/3rmhUE0L5X0Qxzyo0bJ7zC/8b345136092f07c06de1188aaee4069a/Miami_-_Conference_Room.jpg)", backgroundPosition: "center", marginBottom: "10vw" }}>
      <Container style={{ height: "70vh", display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "left" }}>
        <Figure>
          <Figure.Image
            width="100vw"
            height="100vh"
            alt=""
            src="https://myremoteteams.com/wp-content/uploads/2021/05/Logo-Remote-Teams-02-1.png"
            style={{ width: "50%" }}
          />
        </Figure>
        <div style={{ display: "block" }}>
        <Button variant='success'>
          SEARCHING FOR A TALENT?
        </Button>{' '}
        <Button variant="outline-success">
          LOOKING FOR A JOB?
        </Button>
        </div>
      </Container>
      <h1 style={{ fontSize: "20vw", fontFamily: "Raleway, sans-serif", color: "white", textAlign: "left" }}>Global</h1>
    </div>

    <div style={{ height: "auto", marginBottom: "10vh" }}>
      <Row style={{ display: "flex", alignItems: "center" }}>
        <Col sm>
          <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src="https://myremoteteams.com/wp-content/uploads/2021/04/job_recruitement_11-1.png"
              style={{ width: "auto", height: "70vh" }}
            />
          </Figure>
        </Col>
        <Col sm style={{ marginLeft: "-12.5vw"}}>
          <h2 style={{ fontSize: "3rem", fontFamily: "'Raleway', sans-serif", textAlign: "left" }}>
            What We Do
          </h2>
          <hr style={{ textAlign: "left", marginBottom: "10vh", height: "4px", borderWidth: "0", width:"5%", color: "#29cb8b", backgroundColor: "#29cb8b" }} />
          <Row style={{  width: "40vw", textAlign: "left", marginBottom: "3rem" }}>
            <Col>
              <h4 style={{ lineHeight: "1.5" }}>
                <ul><li>We build remote teams tailored for your company</li></ul>
              </h4>
            </Col>
            <Col>
              <h4 style={{ lineHeight: "1.5" }}>
                <ul><li>We curate a list of candidates to meet your expectations</li></ul>
              </h4>
            </Col>
          </Row>
          <Row style={{ width: "40vw", textAlign: "left" }}>
            <Col>
              <h4 style={{ lineHeight: "1.5" }}>
                <ul><li>We manage all legal and financial aspects of hiring abroad</li></ul>
              </h4>
            </Col>
            <Col>
              <h4 style={{ lineHeight: "1.5" }}>
                <ul><li>We support your Remote Team technically and humanly</li></ul>
              </h4>
            </Col>
          </Row>
        </Col>
      </Row>
      
    </div>

    <div style={{ height: "auto", backgroundColor: "#edf1f4", marginLeft: "10vw", marginBottom: "10vh" }}>
      <Container style={{ paddingTop: "15vh", paddingBottom: "15vh"}}>
        <Row>
          <Col>
            <h2 style={{ fontSize: "3rem", fontFamily: "'Raleway', sans-serif", textAlign: "left" }}>
              Benefits<br/>
              of hiring with us
            </h2>
            <hr style={{ textAlign: "left", marginBottom: "10vh", height: "4px", borderWidth: "0", width:"10%", color: "#29cb8b", backgroundColor: "#29cb8b" }} />
            <h4 style={{ textAlign: "left", lineHeight: "1.5", marginBottom: "3rem" }}>
              <ul>
              <li>We bring diversity and agility to your workforce</li><br/>
              <li>We put hiring abroad within your reach, you won´t need lawyers, accountants or offices.</li><br/>
              <li>We drastically reduce your recruiting time and ease your efforts</li><br/>
              <li>We eliminate all costs of hiring in house</li>
              </ul>
            </h4>
            <a href="" style={{ margin: "10rem", color: "black" }}><b>“A GLOBAL TEAM WITHIN YOUR REACH”</b></a>
          </Col>
          <Col>
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src="https://myremoteteams.com/wp-content/uploads/2021/04/job_recruitement_13.png"
                style={{ width: "auto", height: "auto" }}
              />
            </Figure>
          </Col>
        </Row>
        <h2 style={{ fontSize: "3rem", fontFamily: "'Raleway', sans-serif", textAlign: "left" }}>
          We build long lasting relationships between candidates & businesses
        </h2>
        <hr style={{ textAlign: "left", marginBottom: "10vh", height: "4px", borderWidth: "0", width:"5%", color: "#29cb8b", backgroundColor: "#29cb8b" }} />
        <h5 style={{ textAlign: "left", lineHeight: "2", }}>
          Remote work is a tendency in exponential growth all around the world which has erased the frontiers among countries and created a global workforce available for job opportunities. We are an interdisciplinary team of young professionals dedicated to finding the perfect match for our clients, and nurturing and supporting our local employees all around the world. Our vision is to make abroad hiring accessible for all businesses and give qualified candidates the opportunity to join the global workforce.
        </h5>
      </Container>
    </div>

    <div style={{ height: "auto", marginBottom: "10vh" }}>
      <Row style={{ display: "flex", alignItems: "center" }}>
        <Col sm>
          <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src="https://myremoteteams.com/wp-content/uploads/2021/04/job_recruitement_12.png"
              style={{ width: "auto", height: "auto", maxHeight: "100vh" }}
            />
          </Figure>
        </Col>
        <Col sm>
          <h2 style={{ fontSize: "3rem", fontFamily: "'Raleway', sans-serif", textAlign: "left" }}>
            Our Services
          </h2>
          <hr style={{ textAlign: "left", marginBottom: "10vh", height: "4px", borderWidth: "0", width:"5%", color: "#29cb8b", backgroundColor: "#29cb8b" }} />
          <h4 style={{ lineHeight: "1.5", textAlign: "left", marginBottom: "5vh" }}>
            <ul>
            <li>Hunting for one job position or building an entire team</li><br/>
            <li>Managing all legal and financial aspects involved in hiring abroad</li><br/>
            <li>Supporting the Remote Teams locally</li>
            </ul>
          </h4>
          <Button variant='success' style={{ float: "left" }}>
            CONTACT US
          </Button>
        </Col>
      </Row>
    </div>

    <div style={{ width: "95vw", height: "100vh", backgroundColor: "#000dff", marginBottom: "10vh" }}>
      <h1 style={{ fontSize: "12.5rem", fontFamily: "'Arizonia', cursive", color: "#27cb8b", /* backgroundColor: "#000dff" */ }}>
        "
      </h1>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src=""
            alt=""
            style={{ backgroundColor: "#000dff", height: "30vh" }}
          />
          <Carousel.Caption>
            <h3>“I love working at Remote Teams! I applied for an administrative job at a multinational company based abroad, and now I'm working from home as part of a global team!”</h3>
            <p>Luciano</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src=""
            alt=""
            style={{ backgroundColor: "#000dff", height: "30vh" }}
          />

          <Carousel.Caption>
            <h3>“Remote teams hunted us to work as a graphic design team for a US based client owning several brands. From Argentina, we work side by side with its communications team abroad, we are in charge of the graphic design in the communication area and we are learning a bunch!"</h3>
            <p>Carla & Luciana</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src=""
            alt=""
            style={{ backgroundColor: "#000dff", height: "30vh" }}
          />

          <Carousel.Caption>
            <h3>“I applied to lead a sales team in Argentina for a US based company, and now we already are  15 in my team! We sell home design items. We all work from home, and the team's performance is outstanding! We are constantly searching for new candidates to join our team."</h3>
            <p>Federico</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h1 style={{ fontSize: "25vw", fontFamily: "'Raleway', sans-serif", color: "white" }}>Success</h1>
    </div>

    <Container>
      <div style={{ height: "auto", marginBottom: "10vh" }}>
        <h2 style={{ fontSize: "3rem", fontFamily: "'Raleway', sans-serif", textAlign: "left" }}>
          Trending Categories
        </h2>
        <hr style={{ textAlign: "left", marginBottom: "10vh", height: "4px", borderWidth: "0", width:"5%", color: "#29cb8b", backgroundColor: "#29cb8b" }} />
        <Row style={{ marginBottom: "1rem" }}>
          <Col>
            <div style={{ backgroundImage: "url(https://myremoteteams.com/wp-content/uploads/2021/05/it.jpg)", minHeight: "150px", position: "relative" }}>
            <h2 style={{ fontFamily: "'Raleway', sans-serif", textAlign: "left", marginLeft: "0.5rem", color: "white", position: "absolute", bottom: "0", left: "0" }}>Tech & IT</h2>
            </div>
          </Col>
          <Col>
            <div style={{ backgroundImage: "url(https://myremoteteams.com/wp-content/uploads/2021/04/job_recruitement_03.jpg)", minHeight: "150px", position: "relative" }}>
            <h2 style={{ fontFamily: "'Raleway', sans-serif", textAlign: "left", marginLeft: "0.5rem", color: "white", position: "absolute", bottom: "0", left: "0" }}>Law</h2>
            </div>
          </Col>
        </Row>
        <Row style={{ marginBottom: "1rem" }}>
          <Col>
          <div style={{ backgroundImage: "url(https://myremoteteams.com/wp-content/uploads/2021/05/finance.jpg)", minHeight: "150px", position: "relative" }}>
            <h2 style={{ fontFamily: "'Raleway', sans-serif", textAlign: "left", marginLeft: "0.5rem", color: "white", position: "absolute", bottom: "0", left: "0" }}>Administration  & Accounting</h2>
            </div>
          </Col>
          <Col>
            <div style={{ backgroundImage: "url(https://myremoteteams.com/wp-content/uploads/2021/05/design.jpg)", minHeight: "150px", position: "relative" }}>
            <h2 style={{ fontFamily: "'Raleway', sans-serif", textAlign: "left", marginLeft: "0.5rem", color: "white", position: "absolute", bottom: "0", left: "0" }}>Design</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div style={{ backgroundImage: "url(https://myremoteteams.com/wp-content/uploads/2021/05/marketing.jpg)", minHeight: "150px", position: "relative" }}>
            <h2 style={{ fontFamily: "'Raleway', sans-serif", textAlign: "left", marginLeft: "0.5rem", color: "white", position: "absolute", bottom: "0", left: "0" }}>Marketing</h2>
            </div>
          </Col>
          <Col>
            <div style={{ backgroundImage: "url(https://myremoteteams.com/wp-content/uploads/2021/05/sales.jpg)", minHeight: "150px", position: "relative" }}>
            <h2 style={{ fontFamily: "'Raleway', sans-serif", textAlign: "left", marginLeft: "0.5rem", color: "white", position: "absolute", bottom: "0", left: "0" }}>Sales</h2>
            </div>
          </Col>
        </Row>
      </div>

      <div style={{ height: "20vh" }}>
        <Row>
          <Col style={{ textAlign: "left" }}>
            <h4>
              Contact Us
            </h4>
            <p>
              info@myremoteteams.com<br />
              +54 9 11 5013 9583
            </p>
          </Col>
          <Col style={{ textAlign: "left" }}>
            <h4>
              Subscribe for updates & free resources
            </h4>
          </Col>
          <Col>
          <Stack gap={2} className="col-md-5 mx-auto">
            <Form.Control type="text" placeholder="Email" />
            <Button variant="success">
              SUBSCRIBE
            </Button>
          </Stack>
          </Col>
        </Row>
        <Row>
          <p>
            Remote Teams © 2021 All rights reserved – Powered by Marketing2510
          </p>
        </Row>
      </div>
    </Container>

  </div>
);

export default FdPatrickPage;
