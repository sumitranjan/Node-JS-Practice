import { sum, mul } from "./cal";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//This Render code should be only one time in React application
ReactDOM.render(
  <div>
    <h1 className="redtext">Hello React</h1>{" "}
    <img
      src="https://d33wubrfki0l68.cloudfront.net/d74da08f08b4a17c368b58d36ee23c368b4a6819/fff62/img/homepage/phones.png"
      height="400px"
      width="400px"
    />
  </div>, // What : JSX
  document.getElementById("root") // Where
);
