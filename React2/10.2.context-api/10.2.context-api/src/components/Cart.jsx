import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  let {  addToCart } = useContext(CartContext);
  return (
    <div>
      Cart
      <button onClick={()=>addToCart()}>add to cat</button>
    </div>
  );
};

export default Cart;
