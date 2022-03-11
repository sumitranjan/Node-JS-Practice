//this function is not exported, so it can't be exported
function otherFunction(){
    console.log("Other function");
}

function secondName(){
    console.log("Second Name");
}

//Default export: 
module.exports = secondName;

// Export both function
//Method 1
//In ES6 if key and value is same we can skip value
// module.exports = {secondName,otherFunction};

//Method 2
// module.exports = {secondName:secondName,otherFunction:secondName};