//d806bd70


//http://www.omdbapi.com/?apikey=[yourkey]&
//api key : c5e517af

async function searchMovie() {

    //0. Fet the movie name
    try {
        let movie = document.getElementById('query').value;

        let res = await fetch(`http://www.omdbapi.com/?apikey=c5e517af&s=${movie}`)

        let data = await res.json();
        // console.log("data:",data);
        
        return data.Search;
    } catch (error) {
        console.log("err:",err)
    }
 
}


async function main() {

   let data = await searchMovie();

   if(data === undefined){
       return;
   }
//    console.log("data", data);    
   appendData(data);
}

let movies_div = document.getElementById('movies')

function appendData(movies){

    movies_div.innerHTML = null;
    movies.forEach(function (el){

        let p = document.createElement('p');

        p.innerText = el.Title;

        movies_div.append(p);

    });
}



//debounce


//func - main
//


//"a" --> debounce() -->setTimeOut(a)
//"av" --> debounce() 

let timerId;

function debounce(func, delay){

    //when 1st you enter, there is no timerid

    if(timerId){

        clearTimeout(timerId)
    }
    timerId = setTimeout(function () {
        func();
    },delay);

}