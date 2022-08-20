import React, { FC } from 'react';

import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Badge from 'react-bootstrap/Badge';

interface FdOptionsMainMenuProps {}

const FdOptionsMainMenu: FC<FdOptionsMainMenuProps> = () => (
  <div>
    <main>

      <div id="carousel">
        <div className="prevLeftSecond" style={{ backgroundColor: "pink", borderRadius: "25px" }}>
          <img src="./pizza_2.png" alt="" style={{ padding: "2rem" }} />
          <h4 style={{ marginTop: "-7vh" }}><Badge pill bg="danger" style={{ color: "white", textTransform: "uppercase" }}>Pizzas</Badge></h4>
        </div>

        <div className="prev" style={{ backgroundColor: "lightblue", borderRadius: "25px" }}>
          <img src="./soda.png" alt="" style={{ padding: "2rem" }} />
          <h4 style={{ marginTop: "-7vh" }}><Badge pill bg="primary" style={{ color: "white", textTransform: "uppercase" }}>Bebidas</Badge></h4>
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

      </div>

    </main>
  </div>
);

export default FdOptionsMainMenu;