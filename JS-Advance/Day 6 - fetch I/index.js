

//1. API - Road
//2. Fetch - Roadtrip
//3. url - Location

let url = "https://fakestoreapi.com/products"

let myrequest = fetch(url);

console.log("x:",myrequest);

myrequest
    .then(function(res){
        //console.log("res:",res.json())
        return res.json();//collect , collection of data will take time(data is coming from api)
    })
    .then(function(res) {
        console.log("res1:",res)//this .then belonfg to upper .then
    })

    .catch(function (err){
        console.log("err:",err)
    });


//Above code & below code do same work
//Two different way of writing 
 

let url1 = "https://fakestoreapi.com/products"
fetch(url1)
    .then(function(res){
        //c onsole.log("res:",res.json())
        return res.json();//collect
    })
    .then(function(res) {
        console.log("res2:",res)//this .then belonfg to upper .then
    })

    .catch(function (err){
        console.log("err:",err)
    });


//async-await Method
// Above Same thing can be done using async-await

let url2 = "https://fakestoreapi.com/products"


async function getData() {

    try{
        let res = await fetch(url2);

        let data = await res.json();
        // console.log("data:",data);

        //When the data come from api then only it wiil append,
        //Thats why promise is important, 
        //So, thats why appendProduct() function is called here not outside of function
        
        appendProduct(data);
        
    }
    catch (err)  {
        console.log("err:",err);
    }
    
}

getData();

const container = document.getElementById("container");

function appendProduct(data) {
    console.log("data:",data)

    //data is an array
    data.forEach(function (el) {
        console.log("el:",el)
        
        let div = document.createElement('div');
        
        let img = document.createElement('img');
        img.src = el.image;

        let title = document.createElement('p');
        title.innerText = el.title;     

        let price = document.createElement('p');
        price.innerText = el.price;

        div.append(img, title, price);

        container.append(div);
    });
}


//API key : c5e517af

async function getMovie(){

    let res = await fetch("https://www.omdbapi.com/?apikey=c5e517af&s=avengers");

    let data = await res.json();
    console.log("movie data:",data)
}

getMovie();
