
//apikey = c5e517af
//api: http://www.omdbapi.com/?apikey=[yourkey]&

async function searchMovie(){

    var movie = document.getElementById("movie").value;
    
    try {
        let res = await fetch(`https://www.omdbapi.com/?apikey=c5e517af&s=${movie}`)

        let data = await res.json();
        console.log(data.Search);    
       display(data.Search);
    } catch (error) {
        console.log("error:",error)
    };

}
const container = document.getElementById("container");

function display(data){
    container.innerHTML=null;

    if(data==undefined){
        let movieNotFound = document.createElement("img");
        movieNotFound.id="movieNotFound"
        movieNotFound.src="https://ell.brainpop.com/conceptmap/img/img_noresults_movies.png";
        container.append(movieNotFound)
        return;
    }
    data.forEach(function (el) {
    
        //console.log("el:",el);
        
        let image = document.createElement("img");
        image.src=el.Poster;

        let title = document.createElement("p");
        title.innerText = el.Title;

        let year = document.createElement("p");
        year.innerText = el.Year;

        let rating = document.createElement("p");
        rating.innerText = (Math.random() * (10-6) + 6).toFixed(1);
        let recomended = document.createElement("p");
        if(rating.innerText>8.5){
            recomended.id="recomended"
            recomended.innerText = "Recomended";
        }

        var card= document.createElement("div");

        card.append(image, title,year,rating,recomended);

        container.append(card);
    });

  

}