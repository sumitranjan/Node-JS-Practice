import { useEffect, useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Counter from "./Components/Counter";
import Todos from "./Components/Todos";
import axios from "axios";
import {
  userLoginFailure,
  userLoginRequest,
  userLoginSuccess,
} from "./Redux/AuthReducer/action";

function App() {
  const [useremail, setUseremail] = useState("");
  const [userpassword, setUserpassword] = useState("");

  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  const token = useSelector((state) => state.AuthReducer.token);

  const dispatch = useDispatch();

  const handleLogin = () => {
    if (useremail && userpassword) {
      const payload = {
        email: useremail,
        password: userpassword,
      };

      dispatch(userLoginRequest());
      return axios
        .post("https://reqres.in/api/login", payload)
        .then((r) => {
          dispatch(userLoginSuccess(r.data.token));
        })
        .catch((e) => {
          dispatch(userLoginFailure());
        });
    }
  };

  console.log("Inside App.js token", token);
  return (
    <div className="App">
      <Counter />
      <br />
      <input
        placeholder="email"
        type="email"
        value={useremail}
        onChange={(e) => setUseremail(e.target.value)}
      />
      <br />
      <input
        placeholder="password"
        type="password"
        value={userpassword}
        onChange={(e) => setUserpassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
      {isAuth && token && <Todos />}
    </div>
  );
}

export default App;
