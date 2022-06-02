//1. Create a promise

// let myPromise = new Promise(function(resolve, reject){

//     resolve("I won");

//     reject("I tried");
// })



    let passexam = true;

    let myPromise = new Promise(function (resolve, reject) {

        if(passexam === true){
            resolve("You get a watch, choclate");
        }
        else{
            reject("You get chappal");
        }

    });

    //how do you handle promise value( resolve & reject value)

  