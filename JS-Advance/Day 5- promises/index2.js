

function Order() {

    let status = 'open'; 

    let order = document.getElementById('food').value;

    let food_promise = new Promise(function (resolve, reject){

    setTimeout
    if(status === "open"){
        resolve(order)
    }
    else{
        reject("Told you, it was closed");
    }

    });

    food_promise.then(function(res){
        console.log("res:", res);
    });

    food_promise.catch(function(err){
        console.log("err:", err);
    });
}

