/*

//Mutable
var arr=[1,2,3]
arr[0]=7 

//Im mutable
var str ="masai"
// str[0]=M

var d; //undefined

//Primitive Datatypes // Number,string, null
var a = 10;  //Assignment 
//a holds the value
//By Value

var b =a; //10

b = 20; //a=?
console.log("a:",a);//a=10;


//Non-Primitive Datatypes//object, Array,function

var b ={name:'masai'} //object, Array,function
//b holds the address/point to address
//By Reference

var c = b;
c.name = 'masai school'; 
console.log("b:",b);//b: {name:'masai school'}

///////////////////////

//In Js: 
//Primitive Data Types : Immutable ( value cannot be changed in memory )
//Non- Primitive Data Types: Mutable ( value can be changed in memory )

//Remember:
//Mutability refers to changing the value itself and not the value of variable.
*/

// function check(){
//     console.log(this)

// }
// check();


const person ={
    name:'pablo',

    test: function(){
        console.log(this);
    }
}

