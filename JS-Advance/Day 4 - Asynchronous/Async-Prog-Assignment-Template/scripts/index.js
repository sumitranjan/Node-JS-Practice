function movieObj(name,type,release_date,rating,image){
    this.name=name,
    this.type = type,
    this.release_date=release_date;
    this.image=image,
    this.rating=rating
}

let movie1 =new movieObj("Jai Bhim","Crime, Drama",2021,9.3,"https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_UY98_CR5,0,67,98_AL_.jpg");
let movie2 =new movieObj("The Shawshank Redemption","Drama",1994,9.4,"https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX67_CR0,0,67,98_AL_.jpg");

let movie3 =new movieObj("The Godfather","Crime, Drama",1972,9.2,"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY98_CR1,0,67,98_AL_.jpg");

let movie4 =new movieObj("The Dark Knight","Action,Crime,Drama",2008,9.0,"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX67_CR0,0,67,98_AL_.jpg");

let movie5 =new movieObj("The Godfather: Part II","Crime,Drama",1974,9.0,"https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY98_CR1,0,67,98_AL_.jpg");

let movie6 =new movieObj("12 Angry Men","Crime,Drama",1957,9.0,"https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX67_CR0,0,67,98_AL_.jpg");

let movie7 =new movieObj("The Lord of the Rings: The Return of the King","Crime,Drama",2003,8.9,"https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX67_CR0,0,67,98_AL_.jpg");

let movie8 =new movieObj("Pulp Fiction","Crime,Drama",1994,8.9,"https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY98_CR0,0,67,98_AL_.jpg");

let movie9 =new movieObj("Schindler's List","Crime,Drama",1993,8.9,"https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX67_CR0,0,67,98_AL_.jpg");

var movieArr=[];
movieArr.push(movie1,movie2,movie3,movie4,movie5,movie6,movie7,movie8,movie9);
localStorage.setItem("movies",JSON.stringify(movieArr));
//var movieData = JSON.parse(localStorage.getItem("movie"))

movieArr.map(function(data){
    var image= document.createElement("img");
    image.setAttribute("src",data.image);

    var name = document.createElement("p");
    name.textContent=data.name;
    //console.log(data.name);

    var type = document.createElement("p");
    type.textContent=data.type;

    var release_date = document.createElement("p");
    release_date.textContent=data.release_date;

    var rating = document.createElement("p");
    rating.textContent=data.rating;


    var divImg = document.createElement("div");
    divImg.append(image);
    divImg.id="divImg"

    var divContent = document.createElement("div");
    divContent.id="divContent"
    divContent.append(name,type,release_date,rating);

    var divImgContext = document.createElement("div");
    divImgContext.append(divImg,divContent);
    divImgContext.id="divImgContext"

    document.querySelector("#movies").append(divImgContext)
    

});


//Slide Show

// function slide_image_obj(image){
//     this.image= image;
// }

// let image1 = new slide_image_obj("https://image.shutterstock.com/image-photo/sunset-coast-lake-nature-landscape-600w-1960131820.jpg");
// let image2 = new slide_image_obj("http://www.smh.com.au/content/dam/images/h/1/f/z/x/v/image.imgtype.articleLeadwide.620x349.png/1562315678260.png");
// let image3 = new slide_image_obj("https://image.shutterstock.com/image-photo/calm-evening-600w-1220933971.jpg");

var image1 ="https://m.media-amazon.com/images/I/91Ju+9pP9kL._SX466_.jpg";
var image2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbN3zvVJvdJWY7XSJRPuy-AIjsm3gV2IKG8g&usqp=CAU";
var image3 = "https://eskipaper.com/images/the-dark-knight-4.jpg";
var imageArr=[];


imageArr.push(image1, image2,image3);
localStorage.setItem("images_arr",JSON.stringify(imageArr));

    var x;

    function slideShow(){

        let images_arr = JSON.parse(localStorage.getItem('images_arr'));

    let slideshow_image = document.getElementById("slideshow_image");

    var i=0;
    x = setInterval( function (){

        console.log(images_arr.length);
        if(i === images_arr.length){
            i=0;

        }
        slideshow_image.src = images_arr[i]
        i = i+1;

        console.log('i:',i);

    },2000);

}

slideShow();


function handlePriceSort() {
    var selected = document.querySelector("#ratingSort").value;
    //console.log(selected);
    if (selected == "high") {
      //descending
      movieArr.sort(function (a, b) {
        return Number(b.rating) - Number(a.rating);
      });
    }
    if (selected == "low") {
      //ascending
      movieArr.sort(function (a, b) {
        return Number(a.rating) - Number(b.rating);
      });
    }

    console.log(movieArr);
    // displayData(mensData);
  }

    



