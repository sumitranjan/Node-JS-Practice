import React from "react";
import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("saddfsadf");
  const location = useLocation();

  console.log(location);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      const payload = {
        email,
        password,
      };
      axios
        .post("https://reqres.in/api/login", payload)
        .then((r) => {
        //   console.log(location.state.from);
          navigate(location.state?.from);
          //   navigate("/") //homepage
          //   navigate("/products")
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
