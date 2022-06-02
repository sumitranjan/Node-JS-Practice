
// var url =`https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`
async function getdata(url){
    try{
        let res=await fetch(url) 
        let data= await res.json()
        // console.log(data)
        // display(data.meals)
        return data.meals
    }
catch(err){
    console.log(err)
}
}


const  display = (d,parent) =>
  {
    // console.log(d)
   d.map((elem)=>
   {  
       var div1  = document.createElement("div")
       var image = document.createElement("img")
       image.src = elem.strMealThumb
       var p = document.createElement("p")
           p.textContent=elem.strMeal
       div1.append(image,p)
      parent.append(div1)
   })
}






export {getdata,display}



// let url="https://fakestoreapi.com/products/category/jewelery"

// async function getdata(){

// try{

//     let res=await fetch(url)
//     let data= await res.json()
    
  
  
//     //  append(data)
//     return data

// }

// catch(err){

//     console.log("err",err)
// }


// }

// // let a=document.querySelector("#data")

// function append(data,a){
// // console.log(data[0])
// data.forEach((el)=>{


// let div=document.createElement("div")
// let image=document.createElement("img")
// image.src=el.image
// let p=document.createElement("p")
// p.innerHTML=el.Title
// div.append(image,p);
// a.append(div)
// });

// }
// export {getdata,append}
