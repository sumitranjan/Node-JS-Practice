import React, { useContext } from "react";
import WishList from "./WishList";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContex";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { isAuthorized, login, logout } = useContext(AuthContext);
  const { buy } = useContext(CartContext);
  const { isLight, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      Navbar
      <button
        onClick={() => {
          isAuthorized ? logout() : login("Sumit", "1234");
        }}
      >
        {isAuthorized ? "Logout" : "Login"}
      </button>
      <button onClick={buy}>Buy</button>
      <button onClick={toggleTheme}>{`Make ${
        isLight ? "Dark" : "Light"
      }`}</button>
      <WishList />
    </div>
  );
};

export default Navbar;
