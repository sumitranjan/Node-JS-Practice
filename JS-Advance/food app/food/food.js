import {getdata,display} from "./components/showdata.js"
import navbar from "./components/navbar.js"
// import {getitem,display2} from "./components/showdata.js"
console.log(navbar)

var nav = document.querySelector("#navbar")
nav.innerHTML= navbar()

document.querySelector("#btn").addEventListener("click",getitem)

async function getitem(){

    document.querySelector("#food").innerHTML=null
    
    document.querySelector("#food").textContent="SearchedFood"
    // document.querySelector("#meal").append(h2)
    try{
        let search = document.querySelector("#searchkey").value
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`) 
        let data= await res.json()
       display2(data.meals)
    }
    catch(err){
    console.log(err)
    }
    }
    
    // idMeal: '52977', strMeal: 'Corba', strDrinkAlternate: null, strCategory: 'Side', strArea: 'Turkish',strMealThumb
  const  display2 = (d) =>
      {
        document.querySelector("#mealfood").innerHTML=null
        console.log(d)
       d.map((elem)=>
       {  
        var div2  = document.createElement("div")
       
           var image1 = document.createElement("img")
           image1.src = elem.strMealThumb
           var p = document.createElement("p")
           p.textContent=elem.strMeal
           div2.append(image1,p)
           document.querySelector("#mealfood").append(div2)
       })
    }
// getitem()

// 

var url =`https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian`;
let res = await getdata(url)
let parent =document.querySelector("#container")

display(res,parent)
 