
const person1 = {
    name: 'pablo',

    test:function () {
        console.log(this);
    }
}

const person2 = {
    name: 'pablo',

    test:function () {
        console.log(this);
    }
}

const person3 = {
    name: 'pablo',

    test:function () {
        console.log(this);
    }
}

//this is flexible, value of this changes
//this will always point to an object



//Create a function that will return an Object.(without using constructor function)
//Method 1
function NikeProduct() {

    let obj ={

        name:'shoes',
        price:2000,
        type:'sneaker'
    }

    return obj;
}

let p1 = NikeProduct();
console.log("p1:",p1)//op- p1: object


//Method 2 (same as method 1)

function NikeProduct() {

    let product = {};
    
    product.name='shoes';
    product.price=2000;
    

    return product;
}

let p2 = NikeProduct();
console.log("p2:",p2)//op- p2: object

//Create a function that will return an Object, using constructor function

//Constructor function

function NikeProductCF() {

    

        this.name='shoes',
        this.price=2000


}

let p3 = new NikeProductCF();
console.log("p3:",p3)//op- p3: object

//new save two lines, don't have to initialize and return


//Constructor will help us create multiple object of same time

function student(s) {

    this.name = s

}

let s1 = new student("Sumit");
console.log("s1:",s1) //op- s1:object
let s2 = new student("Pablo");
console.log("s2:",s2)//op- s2:object

//Create a virtual Newspaper factory publishing newspaper
//Each newspaper should have a timestamp,  randomid, day of news, name of publisher

function Newspaper(h) {

    this.date = new Date();
    this.id = Math.round(Math.random() * 10);
    this.name = "Pablo Publication";
    this.headline = h;

}

for(let i = 0; i < 10; i++){
let n = new Newspaper("Pablo bought Mars");
console.log('n:',n)
}

//////////////////////////////////////////////////////


//call() & bind() Use case: 

const kitchen = {

    name: 'kitchen',
    purpose: 'cook',
    order:'Thali',

    cookFood(x) {

        console.log(`Serving ${this.order}, ${x}`);
    }
}

// kitchen.cookFood();


const Living_room = {

    name : 'Living room',
    purpose: 'chillll',
    order: 'Maggie'

}

// How do you steal someone else's property on you
//Want to access kitchen property(i.e cookfood() ) in living rooom 
//use call() to get that

//before - this -> Kitchen
kitchen.cookFood.call(Living_room,"coke")
//after - this -> living_room


//call() changes value of this.order to Living_room.order

let x = kitchen.cookFood.bind(Living_room,"coke")
// console.log('x:',x) //Need to execute
x();

//call(),apply(),bind() changes the value of value of this, (i.e changing the value of parent object)
//So, that we can access any parent object and steal their property


//The difference between call() and bind() :
//The difference between call() and bind() is that the call() sets the this keyword
// and executes the function immediately and it does not create a new copy of the function,
// while the bind() creates a copy of that function and sets the this keyword.

//call() is like an ambulance, it come instantly/right away
//bind() is like police, we have to wait for it/have to go to police station