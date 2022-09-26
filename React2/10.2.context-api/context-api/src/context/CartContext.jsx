import React, { createContext, useContext, useState } from "react";
import { AuthContext } from "./AuthContext";

export const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const { isAuthorized } = useContext(AuthContext);
  const [count, setCount] = useState(0);

  const addToCart = () => {
    setCount(count + 1);
  };
  const buy = () => {
    //check if user is loggedin
    //if user is logged in then allow him to pay and buy
    if (isAuthorized) {
      console.log("can buy");
    } else {
      console.log("can not buy without loggin in");
    }
  };
  return (
    <cartContext.Provider value={{ count, addToCart, buy }}>
      {children}
    </cartContext.Provider>
  );
};
