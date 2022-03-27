import React, { FC } from 'react';

/* import FdNavbarMain from '../FdNavbarMain/FdNavbarMain';
import FdNavbarShopping from '../FdNavbarShopping/FdNavbarShopping'; */

import './Carousel.js';

import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Badge from 'react-bootstrap/Badge';

interface FdOptionsMainMenuProps {}

const FdOptionsMainMenu: FC<FdOptionsMainMenuProps> = () => (
  <div>
    <main>

      <div id="carousel">

        {/* <div className="hideLeft">
          <img src="" alt="" />
        </div> */}

        <div className="prevLeftSecond" style={{ backgroundColor: "pink", borderRadius: "25px" }}>
          <img src="./pizza_2.png" alt="" style={{ padding: "2rem" }} />
          <h4 style={{ marginTop: "-7vh" }}><Badge pill bg="danger" style={{ color: "white", textTransform: "uppercase" }}>Pizzas</Badge></h4>
        </div>

        <div className="prev" style={{ backgroundColor: "lightblue", borderRadius: "25px" }}>
          <img src="./soda.png" alt="" style={{ padding: "2rem" }} />
          <h4 style={{ marginTop: "-7vh" }}><Badge pill bg="primary" style={{ color: "white", textTransform: "uppercase" }}>Bebidas</Badge></h4>
          {/* <h1 style={{ color: "goldenrod", textTransform: "uppercase"}}>Bebidas</h1> */}
        </div>

        <div className="selected" style={{ backgroundColor: "lightgray", borderRadius: "25px" }}>
          <img src="./pizzeria.png" alt="" style={{ padding: "2rem" }} />
          <h4 style={{ marginTop: "-7vh" }}><Badge pill bg="secondary" style={{ color: "white", textTransform: "uppercase" }}>Endereços</Badge></h4>
        </div>

        <div className="next" style={{ backgroundColor: "lightgreen", borderRadius: "25px" }}>
          <img src="./pizza-truck.png" alt="" style={{ padding: "2rem" }} />
          <h4 style={{ marginTop: "-7vh" }}><Badge pill bg="success" style={{ color: "white", textTransform: "uppercase" }}>Entregas</Badge></h4>
        </div>

        <div className="nextRightSecond" style={{ backgroundColor: "yellow", borderRadius: "25px" }}>
          <img src="./employee.png" alt="" style={{ padding: "2rem" }} />
          <h4 style={{ marginTop: "-7vh" }}><Badge pill bg="warning" style={{ color: "white", textTransform: "uppercase" }}>Atendimento</Badge></h4>
        </div>

       {/*  <div className="hideRight">
          <img src="https://i1.sndcdn.com/artworks-000064920701-xrez5z-t500x500.jpg" alt="" />
        </div> */}

      </div>

      {/* <div className="buttons">
        <button id="prev">Prev</button>
        <button id="next">Next</button>
      </div> */}

    </main>
  </div>
);

export default FdOptionsMainMenu;

{/* <Container style={{
  position: "fixed",
  top: "50%",
  left: "50%",
  /* bring your own prefixes /
  transform: "translate(-50%, -50%)",
  display: "flex",
  justifyContent: "center"
}}>
{/* <FdNavbarMain /> /}
{/* <FdNavbarShopping /> /}
<Carousel interval={null} style={{
  width: "50%",
  display: "flex",
  alignItems: "center"
}}>
  <Carousel.Item /* style={{ margin: "100px 0 100px 0" }} />
    <img
      className="d-block w-100"
      style={{margin: "auto", borderRadius: "2rem" }}
      src="https://www.recipetineats.com/wp-content/uploads/2020/05/Pizza-Crust-without-yeast_5-SQ.jpg?w=500&h=500&crop=1"
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item /* style={{ margin: "100px 0 100px 0" }} />
    <img
      className="d-block w-100"
      style={{margin: "auto", borderRadius: "2rem" }}
      src="https://thebigmansworld.com/wp-content/uploads/2020/03/2-ingredient-pizza-dough-13.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item /* style={{ margin: "100px 0 100px 0" }} />
    <img
      className="d-block w-100"
      style={{margin: "auto", borderRadius: "2rem" }}
      src="https://www.tasteofhome.com/wp-content/uploads/2018/01/Homemade-Pizza_EXPS_HCA20_376_E07_09_2b-2.jpg?fit=700,1024"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Container> */}
