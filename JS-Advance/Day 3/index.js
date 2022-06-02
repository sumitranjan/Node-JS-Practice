//Prototype-Inheritance

const cats = {
    //Same property in all animals
    legs: 4,
    tail: true,
    claws:'sharp',
    moustache: true
}

//Tiger,lion,cheetah

const Tigers = {
    //Same property in all animals
    legs: 4,
    tail: true,
    claws:'sharp',
    moustache: true,
    //Different property than other animal
    speed:60,
    color:'orange',
    weight:'300 kg',
    climb:false
}

const cheetahs = {
    //Same property in all animals
    legs: 4,
    tail: true,
    claws:'sharp',
    moustache: true,
    //Different property than other animal
    speed: 100,
    climb:true,
}

//This method is reduntan
//So need better way to create object
//Instead of copy pasiting inherit the property
//using Object.create() we can do this

//Object.create()

const cat = {
    //Same property in all animals
    legs: 4,
    tail: true,
    claws:'sharp',
    moustache: true
}

const Tiger = Object.create(cat);
console.log(Tiger.legs)// 4
Tiger.speed = 60;// It will be displayed in console object
console.log(Tiger) //Property will be displaye in Prototype in console


/////////////////////////////////

//Blueprint

const Rebock_shoes = {
    brand : 'Reebock',
    type: 'shoes',
    material : 'leather',
    country: 'India',
}


//Loafer, Sneakers

//Prototype Chain/Inherit
const fish = {
    name : 'nemo',
    talk: true
}

const monkey = Object.create(fish);

const humans = Object.create(monkey);

console.log('humans:',humans)

console.log(humans.name)//nemo

humans.name='Pablo';
console.log(humans.name)//Pablo


//hasOwnProperty
console.log("****hasOwnProperty check****")
console.log(humans.hasOwnProperty('talk'))//false
console.log(humans.hasOwnProperty('name'))//true

//How to add advertisement in prototype of newswpaper
function Newspaper(h) {

    this.date = new Date();
    this.id = Math.round(Math.random() * 10);
    this.name = "Sumit Publication";
    this.headline = h;

}

Newspaper.prototype.ad = function () {

    console.log("Flipkart Big Billion Sale")
}

Newspaper.prototype.magzine = "khush raho";


let n1 = new Newspaper("Sumit is happy");
console.log('n1:',n1)

n1.ad();

//////////////////////////////
//Array is constructor funmction

let a = new Array(1,2,3)//Array is object
//a1 is an object
a.push(4)//4 is added to array
//pushi() is a method
console.log('a:',a);


let s1 = String('Sumit');
//Split is a method
s1.split('m')// String acts as object for temporary 
console.log('s1:',s1);


////////////////////////////////////////////


let a1 = new Array(1,2,3);
console.log("a1:",a1);


//My construtor array
function myArray() {
    // console.log(arguments)
    Object.defineProperty (this,"lenth" , {
        writable : true,
        enumerable : false

    })
    for(let i = 0; i< arguments.length;i++)
    {
        // console.log("i:",arguments[i]);

        this[i] = arguments[i];
        // this.length = arguments.length


    }
}

let a2 = new myArray("Raju","Shyam","Babubhaiya");
console.log("a2:",a2);
console.log("a2:",Object.values(a2));