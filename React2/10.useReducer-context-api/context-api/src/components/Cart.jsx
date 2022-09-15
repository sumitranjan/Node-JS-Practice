import React, { useContext } from "react";
import { cartContext } from "../context/CartContext";

const Cart = () => {
  //   const { count, setCount } = useContext(cartContext);
  const { addToCart } = useContext(cartContext);
  return (
    <div>
      Cart
      <button onClick={addToCart }>add to cart</button>
    </div>
  );
};

export default Cart; 
