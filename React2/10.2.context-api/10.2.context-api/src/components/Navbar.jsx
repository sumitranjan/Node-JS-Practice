import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";
import WishList from "./WishList";

const Navbar = () => {
  const { isAuthorized, login, logout } = useContext(AuthContext);
  const { buy } = useContext(AuthContext);
  const { isLight, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      Navbar
      <button
        onClick={() => {
          isAuthorized ? logout() : login("S", "R");
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
