

import { sum , mul} from "./cal";
// const sum= require("./cal")
import "./index.css"


console.log(sum(2,3));
console.log(mul(2,3));

const root = document.getElementById("root");

const h1 = document.createElement("h1");
h1.innerHTML ="Hello World";
// h1.classList.add("redtext");
h1.setAttribute("class","redtext")

root.appendChild(h1)