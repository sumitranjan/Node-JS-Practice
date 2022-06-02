document.querySelector("form").addEventListener("submit",loginFun);

var regdUsers = localStorage.getItem("userDB");

function loginFun(event){
    event.preventDefault();


    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;

     console.log(regdUsers)
     console.log(regdUsers.length)
    var flag = false;
    for(var i=0; i < regdUsers.length; i++){
        if(regdUsers[i].email==email && regdUsers[i].password==password )
        {
            flag=true;
            console.log("Success");
            
        }
    }
    //console.log(regdUsers);
    //console.log(regdUsers["email"],regdUsers["password"]);
    if(flag==true){
        window.location.href = "/Async-Prog-Assignment-Template/index.html";

    }
    else{
        alert('invalid Credentials');

    }
}