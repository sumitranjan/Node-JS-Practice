//Custome slideshow

function storeImages(){

    let img = document.getElementById('url').value;

    //array of object

    let images = localStorage.getItem('images');
    console.log('images',images)

    if(images === null){
        images = [];
    }
    //there is already data in localstorage
    else{
        images = JSON.parse(localStorage.getItem('images'));
    }
    images.push(img)

    localStorage.setItem('images',JSON.stringify(images))
 

}

//Image URL

//  https://images.immediate.co.uk/production/volatile/sites/4/2021/08/edge-of-the-universe-5dfee93.jpg?webp=true&quality=90&resize=940%2C399
//  https://cdn.mos.cms.futurecdn.net/rwow8CCG3C3GrqHGiK8qcJ-970-80.jpg.webp
//  https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2018_37/2566431/180914-stock-universe-al-1025.jpg
