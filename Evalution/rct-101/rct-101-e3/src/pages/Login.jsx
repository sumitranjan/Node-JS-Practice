import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [loginCredit, setLoginCredit]=useState({
    email:"eve.holt@regres.in",
    password:"cityslicka",
  });
  const { login } = useContext(AuthContext);
  
  const handleChange=(e)=>{
  const { name, value }=e.target;
  setLoginCredit({
    ...loginCredit,
    [name]:value,
  });
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(loginCredit.email && loginCredit.password)
    {
      login(loginCredit.email,loginCredit.password);
    }
  };
  return (
    <div>
      Login 
      <form onSubmit={handleSubmit}
      style={{
        display:"flex",
        flexDirection:"column",
        margin:"auto",
        maxWidth:"200px",
        gap:"10px",
      }}
      >
        
      
      <input data-cy="login-email"
      name="email"
      type="email"
      placeholder="enter email address"
      value={loginCredit.email} 
      onChange={handleChange}/>
      <input data-cy="login-password"
      name="password"
      type="password"
      placeholder="enter password..."
      value={loginCredit.password}
      onChange={handleChange} />
      <button data-cy="login-submit"type="submit">
        Login
      </button>
      </form>
    </div>
  );
};

export default Login;