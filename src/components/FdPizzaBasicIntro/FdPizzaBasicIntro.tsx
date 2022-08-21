import React, { FC, useState, useEffect } from "react";

import { useLocation } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { Data } from "../../interfaces/Interfaces";

interface FdPizzaBasicIntroProps {
  data: Data;
}

const FdPizzaBasicIntro: FC<FdPizzaBasicIntroProps> = (props) => {
  let navigate = useNavigate();

  const location = useLocation();
  const [data, setData] = useState(location.state as Data);

  const [modalShow, setModalShow] = React.useState(false);

  const dataChange = async (item: string) => {
    let copyData = data;
    copyData.firstItem = item;
    setData(copyData);
  };

  useEffect(() => {
    setData(props.data);
  }, []);

  function MyVerticallyCenteredModal(props: any) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <Button
            onClick={() => {
              dataChange("Pizza");
              /* alert(JSON.stringify(data)); */ navigate("/selector");
            }}
          >
            Pizza
          </Button>
          <Button
            onClick={() => {
              dataChange("Drink");
              navigate("/selector");
            }}
          >
            Bebida
          </Button>
        </Modal.Body>
      </Modal>
    );
  }

  console.log("PROPS2");
  console.log(props);
  console.log(data);

  return (
    <>
      <div className="bg-red-500">Cu de pistuela</div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          style={{ margin: "1rem" }}
          variant="outline-secondary"
          size="sm"
          onClick={() => navigate("/adm")}
        >
          Administrar Conta
        </Button>
      </div>
      <Container
        className="containerMain"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Row
          xs={1}
          md={3}
          className="g-4"
          style={{ display: "flex", alignItems: "center" }}
        >
          {Array.from({ length: 3 }).map((_, idx) => (
            <Col>
              <Card
                className="cardMain"
                style={{ alignContent: "center", textAlign: "center" }}
              >
                <Card.Img
                  className="mainImage"
                  variant="top"
                  src={
                    idx == 0
                      ? "pizza.png"
                      : idx == 1
                      ? "pizzeria.png"
                      : "employee.png"
                  }
                  style={{ padding: "1.5rem" }}
                />
                <Card.Body>
                  <Card.Title
                    className="text-3xl font-bold underline"
                    style={{ color: "black" }}
                  >
                    {idx == 0
                      ? "Fazer pedido"
                      : idx == 1
                      ? "Promoções"
                      : "Sobre nós"}
                  </Card.Title>
                  <Card.Text>
                    {idx == 0
                      ? "Saboreie nossas pizzas"
                      : idx == 1
                      ? "Veja nossas promoções"
                      : "Tudo sobre nós"}
                  </Card.Text>
                  {idx == 0 ? (
                    <>
                      <Button
                        variant="primary"
                        onClick={() => setModalShow(true)}
                      >
                        Fazer Pedido
                      </Button>
                    </>
                  ) : null}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default FdPizzaBasicIntro;
