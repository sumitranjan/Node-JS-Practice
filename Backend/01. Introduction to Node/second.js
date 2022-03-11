//this function is not exported, so it can't be exported
function otherFunction(){
    console.log("Other function");
}

function secondName(){
    console.log("Second Name");
}

//Default export: 
module.exports = secondName;

//
module.exports = {secondName,otherFunction};