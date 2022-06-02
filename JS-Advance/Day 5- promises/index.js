
//1. Create a promise

// let myPromise = new Promise(function(resolve, reject){

//     resolve("I won");

//     reject("I tried");
// })



// let passexam = false;

// let myPromise = new Promise(function (resolve, reject) {

//     if(passexam === true){
//         resolve("You get a watch, choclate");
//     }
//     else{
//         reject("You get chappal");
//     }

// });

// console.log("myPromise",myPromise)
// //how do you handle promise value( resolve & reject value)

// myPromise.then(function(res){
//     console.log("res:",res)
// });

// myPromise.catch(function (err) {
//     console.log("error coming because of spelling mistake");
// });

//resolve--then
//reject--catch



let queue = ["Pablo","Raju","Shyam","Babu bhaiya"];

function Register(){

    let name = document.getElementById("name").value;

    queue.push(name);

    let message =`${name} your registration is successful, cheers`;

    alert(message);

    let promise = new Promise(function (resolve, reject){
        let x = setInterval(function(){
            if(queue[0] === name){
                resolve(`${name} its your turn now`)
                clearInterval(x);
            }
        },1000);
        
    });

    promise.then(function(res){
        console.log("res:",res)
    });


}

function Vacination_InProgress(){
    if(queue.length === 0){
        clearInterval(id);
    }
    queue.shift();
    console.log("queue",queue);
}

let id = setInterval(Vacination_InProgress,2000);



