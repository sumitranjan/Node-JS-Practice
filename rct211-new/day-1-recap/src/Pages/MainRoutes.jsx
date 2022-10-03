import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Components/Homepage";
import Login from "../Components/Login";
import Products from "../Components/Products";
import ReqAuth from "../Components/ReqAuth";
import SingleProdct from "../Components/SingleProdct";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/* React Composition */}
      <Route
        path="/products"
        element={
          <ReqAuth>
            <Products />
          </ReqAuth>
        }
      />
      <Route
        path="/products/:id"
        element={
          <ReqAuth>
            <SingleProdct />
          </ReqAuth>
        }
      />
      <Route path="/*" element={<div>404 not found</div>} />
      <Route path="/login/" element={<Login />} />
    </Routes>
  );
};

export default MainRoutes;
