import { sum, mul } from "./cal";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//This Render code should be only one time in React application
ReactDOM.render(
  <div>
    <h1>Hello React</h1> <img src="https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg" />
  </div>, // What : JSX
  document.getElementById("root") // Where
);
