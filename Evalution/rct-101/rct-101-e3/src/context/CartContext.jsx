import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(()=>{
    axios(`http://localhost:8080/cartItems`)
    .then(res=>{
      setCartCount(res.data.length)
    })
    .catch(err=>{

    })
  },[])
  const addToCart = () => {
    setCartCount(cartCount+1)
  }

  const removeFromCart = () => {
    if(cartCount>0)
    {
      setCartCount(cartCount-1)
    }
  }
  return (
      <CartContext.Provider
          value={{cartCount,addToCart,removeFromCart,setCartCount}}>
            {children}
      </CartContext.Provider>
  );
};