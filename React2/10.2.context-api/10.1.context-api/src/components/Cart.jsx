import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  let { count, setCount } = useContext(CartContext);
  return (
    <div>
      Cart
      <button onClick={()=>setCount(count+1)}>add to cat</button>
    </div>
  );
};

export default Cart;
