function makeSandwich(){
    console.log("Making Sandwich 3");
}


function makeBurger(){
    console.log("Making Burger 3");
}


//Method 1 - key:value
module.exports = {makeSandwich:makeSandwich, makeBurger:makeBurger}

//Method 2: 
//If name of key and value is same
//we can omit the value 
// module.exports = {makeSandwich, makeBurger}


//method 3:
// console.log(module.exports)// empty object
// Adding property to module.exports (ie. empty object)
//module.exports.makeBurger = makeBurger;
//module.exports.makeSandwich = makeSandwich;

//Method 4:
//module.exports["makeBurger"] = makeBurger;
//module.exports["makeSandwich"] = makeSandwich;



//Important
// module.exports // empty object