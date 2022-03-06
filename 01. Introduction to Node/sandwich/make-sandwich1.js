const makeSandwich2 = require("./make-sandwich2");


function makeSandwich(){
    console.log("Making Sandwich 1");
    console.log(`not Making ${makeSandwich2()}`)
}

module.exports = makeSandwich;