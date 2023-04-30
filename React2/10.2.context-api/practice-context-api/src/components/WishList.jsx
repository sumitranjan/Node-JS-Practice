import React, { useContext } from "react";
import { CartContext } from "../context/CartContex";

const WishList = () => {
  const { count } = useContext(CartContext);

  return <div>WishList : {count}</div>;
};

export default WishList;
