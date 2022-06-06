import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const {isAuth, changeAuth } = useContext(AuthContext);

  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password,setPassword] = useState('eve.holt@reqres.in');

  const emailChange = (e) => {
      setEmail(e.target.value)
  }

  const passChange = (e) => {
    setPassword(e.target.value)
  }

  const handleLogin = () => {
    if(email==="eve.holt@reqres.in" && password==="eve.holt@reqres.in")
    {
      changeAuth()
    }
  };
  if(isAuth)return <Navigate to="/"/>
  return (
    <div>
      <div>
      <input data-cy="login-email" 
              value={email}
              type='email'
              onChange={emailChange}/>
      </div>
      <div>
      <input data-cy="login-password" 
              value={password}
              type='password'
              onChange={passChange}/>
      </div>
      <div>
      <button style={{width:"170px"}} data-cy="login-submit"
              onClick={handleLogin}>login</button>
      </div>
    </div>
  );
};

export default Login;