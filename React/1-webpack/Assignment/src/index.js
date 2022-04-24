import "./index.css"
import img from "./todo.jpg"

const display = document.getElementById("display")

const displayText = document.createElement("textarea")
displayText.id = "displayText"

display.appendChild(displayText)

const text = document.getElementById("text")
const typetext = document.createElement('textarea')
typetext.id = "typetext";


 const btn = document.getElementById("btn").addEventListener("click", () =>{
   displayText.innerHTML = typetext.value
 })
// btn.innerHTML = "Add ToDo"
// btn.setAttribute("class")
text.append(typetext)

const todoimg = document.getElementById("todoimg");
var todoImage = document.createElement("img");
todoImage.src = img;
todoImage.classList.add("todoImage");
todoimg.append(todoImage)

document.getElementById("displayText").readOnly = true; 