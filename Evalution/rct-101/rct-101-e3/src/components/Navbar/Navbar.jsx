import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
// use react-router Link or NavLink
// const Link = <a />;


const Navbar = () => {
  const { isAuth, changeAuth } = useContext(AuthContext);
  const { cartCount } = useContext(CartContext)

  const handleClick = () => {
    changeAuth()
  }


  return (
    <div data-cy="navbar"
        style={{display:"flex", justifyContent:"space-between", padding:"20px"}}>
      <Link data-cy="navbar-home-link" to='/'>Logo</Link>
      <span style={{marginLeft:"900px"}} data-cy="navbar-cart-items-count">Cart :{isAuth? cartCount:''}</span>
      <button data-cy="navbar-login-logout-button" 
              onClick={handleClick}>
        {isAuth ? 'Logout':'Login'}
      </button>
    </div>
  );
};

export default Navbar;