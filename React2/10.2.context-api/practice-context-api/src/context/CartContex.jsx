import { useContext, useState } from "react";
import { createContext } from "react";
import { AuthContext } from "./AuthContext";

export const CartContext = createContext();

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
      alert("Can Buy!");
      console.log("can buy");
    } else {
      alert("Can't Buy! Login First");
      console.log("can not buy without loggin in");
    }
  };
  return (
    <CartContext.Provider value={{ count, addToCart, buy }}>
      {children}
    </CartContext.Provider>
  );
};
