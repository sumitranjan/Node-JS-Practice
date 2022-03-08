/*
1.  Create a new project and do npm init

2.  Create four files called
    add.js ( write function to add 2 numbers and return the value )

    subtract.js ( write function to subtract 2 numbers and return the value )

    multiply.js ( write function to multiply 2 numbers and return the value )

    divide.js ( write function to divide 2 numbers and return the value )

    and then write main.js file where in you will call these functions and do add, subtract, multiply and divide and console.log the answers
*/


//User Generated module
//Importing the module
const add = require("./add");
const subtract = require("./subtract");
const multiply = require("./multiply");
const divide = require("./divide");

var a = 10;
var b = 5; 

console.log(`${a} + ${b} =`,add(a,b));
console.log(`${a} - ${b} =`,subtract(a,b));
console.log(`${a} * ${b} =`,multiply(a,b));
console.log(`${a} / ${b} =`,divide(a,b));