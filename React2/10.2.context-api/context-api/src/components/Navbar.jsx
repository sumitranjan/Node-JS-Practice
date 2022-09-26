import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";
import Whishlist from "./Whishlist";

const Navbar = () => {
  const { isAuthorized, login, logout } = useContext(AuthContext);
  const { buy } = useContext(AuthContext);
  const { isLight, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      Navbar
      <button
        onClick={() => {
          if (isAuthorized) logout();
          else login("R", "Z");
        }}
      >
        {isAuthorized ? "Logout" : "Login"}
      </button>
      <button onClick={buy}>Buy</button>
      <button onClick={toggleTheme}>{`Make ${
        isLight ? "Dark" : "Light"
      }`}</button>
      {isAuthorized && <Whishlist />}
    </div>
  );
};

export default Navbar;
