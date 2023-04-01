import React from "react";

import { Button, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import { Link as RouterLink } from "react-router-dom";

const BookingPage = () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const HandleDelete = (i) => {
    cart.splice(i, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.reload();
    console.log(cart);
  };

  cart = JSON.parse(localStorage.getItem("cart")) || [];

  var showlength = cart.length;

  if (cart.length === 0) {
    return (
      <h1 mt={"100px"} mb={"150px"} textAlign={"center"}>
        Your Cart is Empty
      </h1>
    );
  }

  const handleBuy = () => {
    let buyData = JSON.parse(localStorage.getItem("buy")) || [];
    localStorage.setItem("buy", JSON.stringify(buyData));
  };
  return (
    <Container style={{ margin: "auto" }}>
      <h1>Total In Cart : - {showlength}</h1>
      <Row>
        {cart.map((e, i) => {
          return (
            <Col md={6} sm={6} lg={4} xxl={3} style={{ marginTop: "1rem" }}>
              <Card key={e.id}>
                <Container style={{ backgroundColor: "lightgray" }}>
                  <Card.Img
                    variant="top"
                    src={e.images}
                    alt={"Img Not Found"}
                    style={{
                      width: "60%",
                      margin: "auto",
                      backgroundColor: "lightgray",
                    }}
                  />
                </Container>
                <Card.Body>
                  <Card.Title>{e?.name}</Card.Title>
                  <Card.Text>Language :- {e?.Language}</Card.Text>
                  <Container
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <Button onClick={() => HandleDelete(i)}>Delete</Button>
                    <RouterLink to={"/buynow"}>
                      <Button
                        onClick={() =>
                          handleBuy({
                            id: e?.id,
                            name: e?.name,
                            Language: e?.language,
                            images: e.image,
                          })
                        }
                      >
                        Buy Now
                      </Button>
                    </RouterLink>
                  </Container>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default BookingPage;
