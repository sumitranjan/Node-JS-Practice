

document.querySelector("form").addEventListener("submit",signupFun);
var userStack = JSON.parse(localStorage.getItem("userDB"))||[];

function signupFun(event){
    event.preventDefault();

    var name = document.querySelector('#name').value;
    var contact = document.querySelector('#contact').value;
    var email = document.querySelector('#email').value;
    var password = document.querySelector('#password').value;

    if(name.length == 0 || contact.length==0 || email.length == 0 || password.length ==0 )
    {
        alert("Please Fill All The Filled");
    }
    else
    {

        var userdata ={
            name:name,
            contact:contact,
            email:email,
            password:password
        };

        userStack.push(userdata);

       localStorage.setItem("userDB",JSON.stringify(userStack));
       window.location.href = "/Async-Prog-Assignment-Template/index.html";
    }
}