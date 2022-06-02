
//For any city, i shold able to get its weather reports

let key = "49cd596f26e6678cfcbc26a8da565e5b";

var container = document.getElementById("container");

let iframe = document.getElementById("map");

async function getWeatherData() {

    //https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    
    try
    {
        let city = document.getElementById("city").value; //accepting data
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
        //add https or http

        let data =  await res.json();
        //console.log("data:",data)

        showWeather(data) 

        
    }
    catch(err){
        console.log("err:",err)
    }
}

//for any city, i should be able to get its weather

function showWeather(d) {

    console.log("d:",d)

    container.innerHTML = null;

    let name = document.createElement('p');
    name.innerText = d.name;

    let temp = document.createElement('p');
    temp.innerText = `Temp - ${d.main.temp}°`;

    let humidity = document.createElement('p');
    humidity.innerText = `Humidity - ${d.main.humidity}°`;

    let pressure = document.createElement('p');
    pressure.innerText = `Pressure - ${d.main.pressure}°`;

    iframe.src=`https://maps.google.com/maps?q=${d.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
    container.append(name,temp, pressure, humidity)
}