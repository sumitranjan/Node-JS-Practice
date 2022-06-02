

//apikey = c5e517af
//https://www.omdbapi.com/?apikey=c5e517af&s=avengers

async function searchMovie(){
    let movie = document.getElementById("movie").value;
    //console.log(movie)

    try{

        let res = await fetch(`https://www.omdbapi.com/?apikey=c5e517af&s=${movie}`)
    
        let data = await res.json();
        //console.log(data);
        
        //console.log(data["Search"]);
        return data.Search;
        //appendMovie(data["Search"]);
    }
    catch (err) {
        console.log("err:",err)
    }
}

const container = document.getElementById("container");

function appendMovie(data){
    
    container.innerHTML=null;

    //data is an array
    data.forEach(function (el) {
        console.log("el:",el)

        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = el.Poster

        let Title = document.createElement("p");
        Title.innerText = el.Title

        let Year = document.createElement("p");
        Year.innerText = el.Year

        let imdbID = document.createElement("p");
        imdbID.innerText = el.imdbID

        div.append(img, Title, Year, imdbID);

        container.append(div)
        
    });
}


async function main() {

    let data = await searchMovie();
    console.log("Data list:",data)
    if(data === undefined){
        return;
    }
 //    console.log("data", data);    
    appendData(data);
 }

 let movies_div = document.getElementById('movies-list')

function appendData(movies){

    movies_div.innerHTML = null;
    movies.forEach(function (el){

        let p = document.createElement('p');
        let a = document.createElement('a');
        a.className="movie_list";
        
        p.innerText = el.Title;

        a.append(p);

        movies_div.append(a);

    });

    let movie_selected = document.querySelector("movie_list");
    console.log(movie_selected)
    // appendMovie(data)

}