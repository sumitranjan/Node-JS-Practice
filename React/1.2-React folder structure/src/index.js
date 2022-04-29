import { sum, mul } from "./cal";
// const sum= require("./cal")
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

console.log(sum(2, 3));
console.log(mul(2, 3));

//  const root = document.getElementById("root");

// ReactDOM.render(
//     "hello React", // What
//     root // Where
// );

// ReactDOM.render(
//     "hello React", // What
//     document.getElementById("root") // Where
// )

// const h1 = document.createElement("h1");
// h1.innerHTML ="Hello World";
// // h1.classList.add("redtext");
// h1.setAttribute("class","redtext")

// root.appendChild(h1)

//Above can be done in one line in React

// const p  = React.createElement(
//   "p",
//   { className: "redtext bigtext", id: "uniqId" },
//   "Hello React"
// );

// ReactDOM.render(
//   p, // What
//   document.getElementById("root") // Where
// );

const h1 = React.createElement("h1", {}, "Hello React");

const div = React.createElement("div", { className: "border" }, "Hello Div");
const img = React.createElement("img", {
  width: "400px",
  height: "400px",
  src: "https://d33wubrfki0l68.cloudfront.net/d74da08f08b4a17c368b58d36ee23c368b4a6819/fff62/img/homepage/phones.png",
});

const toShow = true;

const p = React.createElement(
  "div",
  { className: "redtext bigtext", id: "uniqId" },
  // h1
  // [h1,h1]
  h1,
  "teststring",
  div,
  toShow ? img : null
);

//This Render code should be only one time in React application
ReactDOM.render(
  p, // What
  document.getElementById("root") // Where
);
