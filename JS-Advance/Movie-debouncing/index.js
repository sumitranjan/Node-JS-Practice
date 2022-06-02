// https://fakestoreapi.com/products
async function serchMovie() {

    try {

        let movie = document.getElementById('query').value

        //  8b432a04 api key
        let res = await fetch(`https://www.omdbapi.com/?apikey=8b432a04&s=${movie}`)
      
        // console.log(res)
        let data = await res.json();
        // let data1= await url.json();
       
        return data.Search
        // return data.Search
    }
    catch (err) {
        console.log("err", err)
    }

}

async function main() {



    let data = await serchMovie();

    if (data == undefined) {
        return false
    }
    // console.log(data)
    appendData(data)


}
var movies_div = document.getElementById("movies")


function appendData(movies) {
    // console.log(movies)
    movies_div.innerHTML = " "
    movies.forEach(function (el, index) {

        let p = document.createElement("p")
        p.innerText = el.Title
        p.style.color = "black"
        p.addEventListener("click", function () {
            var serch =movies[index].Title
 
            var url = `http://www.omdbapi.com/?apikey=8b432a04&t=${serch}`
        
        
            async function getData() {
                try {
                    let res = await fetch(url)
        
                    let res1 = await res.json();
                    var data = [res1]
        
                    appendProducts(data)
        
                    // console.log("data",data)
                }
                catch (err) {
        
                }
            }
        
            getData()
           
     
            })

        document.getElementById("movies").style.cssText = ` border:1px solid white; width:20%; background-color:white`

        movies_div.append(p)
    })

}

// debouncing
// "a"---> 
// "av"---->
let timerID;
function
    debounce(func, delay) {
    if (timerID) {
        clearTimeout(timerID)
    }
    timerID = setTimeout(function () {
        func()
    }, delay)
}

function appendmovie(){
    
}





let container = document.getElementById("container")


document.querySelector("button").addEventListener("click", btn)
function btn() {

    // document.getElementById("container").innerHTML = " "
    var serch = document.querySelector("input").value

    var url = `http://www.omdbapi.com/?apikey=8b432a04&t=${serch}`


    async function getData() {
        try {
            let res = await fetch(url)

            let res1 = await res.json();
            var data = [res1]

            appendProducts(data)

            // console.log("data",data)
        }
        catch (err) {

        }
    }

    getData()
}

function appendProducts(data) {
    // var data=[data]
    document.getElementById("container").innerHTML = " "
    console.log("data", data)
    data.forEach(function (ele) {
        console.log("ele", ele)
        if (ele.Error == "Movie not found!") {
            let div = document.createElement("div")
            let title = document.createElement("h1")
            title.innerText = "Moive not found";
            div.append(title)
            container.append(div)

        }
        else {
            let div = document.createElement("div")

            let img = document.createElement("img")
            img.src = ele.Poster

            let title = document.createElement("p")
            title.innerText = ele.Title


            let actor = document.createElement("p")
            actor.innerText = ele.Actors

            let country = document.createElement("p")
            country.innerText = ele.Country





            div.append(img, title, actor, country)

            container.append(div)
        }

    })
}



