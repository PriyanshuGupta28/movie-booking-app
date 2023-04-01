import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleMoviePage = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  const HandleCart = (prod) => {
    let cartData = JSON.parse(localStorage.getItem("cart")) || [];
    let alreadyincart = false;
    for (let i = 0; i < cartData.length; i++) {
      if (cartData[i].id === prod.id) {
        alreadyincart = true;
        break;
      }
    }
    if (alreadyincart) {
      alert("Movie Already in Cart.");
    } else {
      cartData = [...cartData, prod];
      localStorage.setItem("cart", JSON.stringify(cartData));
      alert("Movie Added to Cart.");
    }
  };

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/search/shows?q=all?id=${id}`)
      .then((res) => {
        setData(res.data);
        console.log(res.show);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return <div>SingleMoviePage</div>;
};

export default SingleMoviePage;
