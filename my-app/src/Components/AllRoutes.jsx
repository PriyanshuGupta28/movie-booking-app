import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import SingleMoviePage from "../Pages/SingleMoviePage";
import BookingPage from "../Pages/BookingPage";
import BuyNow from "../Pages/BuyNow";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/booking" element={<BookingPage />}></Route>
      <Route path="/buynow" element={<BuyNow />}></Route>
      <Route path="/:id" element={<SingleMoviePage />}></Route>
    </Routes>
  );
};

export default AllRoutes;
