import { React, useState, useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import axios from "axios";
import CarouselImg from "../Components/Carousel";

import { Link as RouterLink } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);

  const getData = () => {
    setLoading(true);
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
    console.log(data);
  }, []);

  const HandleCart = (prod) => {
    let cartData = JSON.parse(localStorage.getItem("cart")) || [];
    let alreadyincart = false;
    for (let i = 0; i < cartData.length; i++) {
      if (cartData[i].id == prod.id) {
        alreadyincart = true;
        break;
      }
    }
    if (alreadyincart) {
      alert("Movie Already in Cart.");
    } else {
      cartData = [...cartData, prod];
      localStorage.setItem("cart", JSON.stringify(cartData));
      alert("Movie Added in Cart.");

      console.log(cartData);
    }
  };
  if (loading) {
    return (
      <div>
        {/* //  <LoadingBar />; */}
        <h1>loading..</h1>;
      </div>
    );
  }

  return (
    <div>
      <CarouselImg />
      <Container style={{ margin: "auto" }}>
        <Row>
          {data.map((e) => {
            return (
              <Col md={6} sm={6} lg={4} xxl={3} style={{ marginTop: "1rem" }}>
                <Card key={e?.show?.id}>
                  <Container style={{ backgroundColor: "lightgray" }}>
                    <Card.Img
                      variant="top"
                      src={e.show.image?.medium}
                      alt={"Img Not Found"}
                      style={{
                        width: "60%",
                        margin: "auto",
                        backgroundColor: "lightgray",
                      }}
                    />
                  </Container>
                  <Card.Body>
                    <Card.Title>{e?.show?.name}</Card.Title>
                    <Card.Text>Language :- {e?.show?.language}</Card.Text>
                    <Card.Text> Genres :- {e?.show?.genres}</Card.Text>
                    <Card.Text> Status :- {e?.show?.status}</Card.Text>
                    <Card.Text>
                      <a href={e?.show?.officialSite}>OfficialSite</a>
                    </Card.Text>
                    <Card.Text>
                      Rating :- {e?.show?.rating?.average}/10
                    </Card.Text>
                    <RouterLink to={`/${e.show.id}`}>
                      <Card.Text>See More</Card.Text>
                    </RouterLink>
                    <Button
                      onClick={() =>
                        HandleCart({
                          id: e.show.id,
                          name: e?.show?.name,
                          Language: e?.show?.language,
                          images: e.show.image?.medium,
                        })
                      }
                    >
                      Add To Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
