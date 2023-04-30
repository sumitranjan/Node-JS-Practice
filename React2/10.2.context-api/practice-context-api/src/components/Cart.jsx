import React, { useContext } from "react";
import { CartContext } from "../context/CartContex";

const Cart = () => {
  let { addToCart } = useContext(CartContext);
  return (
    <div>
      Cart
      <button onClick={() => addToCart()}>add to cat</button>
    </div>
  );
};

export default Cart;
