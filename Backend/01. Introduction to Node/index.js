// import x from 'path';

// const x = require('path');

//core Modules => comes with imstallation of node
//Third Part Modules => what you install using npm
//User Generated Modules => code that you have written for your project

//node --version
//npm --version 
//nmp is uded for installing third party package/Modules

//nmp init
//npm install package-name =>> to install the package in system
//npm install @masaischooltech/react

// const x = require('path'); //core module
// const express = require('express');//Third Part Modules

// console.log("Hello")clear


//User Generated module
//We are imporing whatever is exported from second file
const second = require("./second");

console.log("Hello");

second();

console.log(second)// o/p: function 

console.log(second())//undefined: nothing is returing from function

// Import 2 function from second.js
// second.otherFunction();
// second.secondName()


// ./second    : file is in current folder
// ../second   : comeout one level
// ../../second   : comeout two level
// ./src/second    

