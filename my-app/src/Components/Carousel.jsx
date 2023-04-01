import React from "react";
import Carousel from "react-bootstrap/Carousel";
// import "./Carousel.css";

function CarouselImg() {
  return (
    <Carousel className="Carousel mt-1">
      <Carousel.Item interval={1000}>
        <img
          className="d-block vw-100"
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1675080778101_web.jpg  "
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block vw-100"
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1680288162936_2erfg.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block vw-100"
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1680000775899_weba.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselImg;
