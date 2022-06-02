
//api key: 49cd596f26e6678cfcbc26a8da565e5b
//api url: https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

let googleKey="AIzaSyD7KIrmNDO1k8PUU5cZ8CBUMzXxWOkKO2Y"
let weather_key= "49cd596f26e6678cfcbc26a8da565e5b"

let iframe = document.getElementById("map");
let map_container= document.getElementById("map_container");

async function searchCity(){

    try {
        let city= document.getElementById("city").value;
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weather_key}&units=metric`);
        let data =  await res.json();
        
        showWeather(data);

        let res2 = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude={daily}&appid=${weather_key}&units=metric`);
        let data2 =  await res2.json();
        console.log("data2",data2)
        displaySevenDaysData(data2);

        
        //sevenDayData(data);
    } catch (error) {
        console.log("err:",error)
    }

}

let temp_detail= document.getElementById("temp_detail");

function showWeather(data){
   console.log("data:",data)

    temp_detail.innerText=null;

    let cityName = document.createElement("p");
    cityName.innerText = `City Name : ${data.name}`;
    
    let maxTemp = document.createElement("p");
    maxTemp.innerText = `Max Temp : ${data.main.temp_max}° C`;

    let minTemp = document.createElement("p");
    minTemp.innerText = `Min Temp : ${data.main.temp_min}° C`;

    let humidity = document.createElement("p");
    humidity.innerText = `Humidity : ${data.main.humidity}`;

    let sunrise = document.createElement("p");
    let sunrise_millisec= data.sys.sunrise*1000;
    let dateObject = new Date(sunrise_millisec);
    let sunrise_humanDateFormat = dateObject.toLocaleString() 
    sunrise.innerText = `Sunrise : ${sunrise_humanDateFormat}`;

    let sunset = document.createElement("p");
    let sunset_millisec= data.sys.sunset*1000;
    let sunset_dateObject = new Date(sunset_millisec);
    let sunset_humanDateFormat = sunset_dateObject.toLocaleString() 
    sunset.innerText = `Sunset : ${sunset_humanDateFormat}`;

    iframe.src=`https://www.google.com/maps/embed/v1/place?key=${googleKey}&q=${data.name}`;

    temp_detail.append(cityName, maxTemp,minTemp, humidity, sunrise, sunset);
    map_container.append(iframe);
    
}


//Google api key: AIzaSyD7KIrmNDO1k8PUU5cZ8CBUMzXxWOkKO2Y



// async function sevenDayData(data){
    
//     try {
//         let city= document.getElementById("city").value;
//         let res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${weather_key}&units=metric`);
//         let data =  await res.json();
//         console.log(data)

//         //displaySevenDays(data);

//     } catch (error) {
//         console.log("err:",error)
//     }
// }


function displaySevenDaysData(data){
    var display_txt = document.createElement("p");
    display_txt.innerText="Next 7 days Weather Forecast :"
    // display_txt.id="display_txt"
    let future_days= document.getElementById("future_days");
    future_days.innerText=null

    future_days.append(display_txt)
    
    // div1.className="day_data"
    console.log(data )
    data.daily.forEach(el => {

        var div1 = document.createElement("div");
        var date = document.createElement("p");

        let date_millisec= el.dt*1000;
        let dateObject = new Date(date_millisec);
        let humanDateFormat = dateObject.toLocaleString() 
        date.innerText = `Date : ${humanDateFormat.slice(0,9)}`;
        
        let maxTemp = document.createElement("p");
        maxTemp.innerText = `Max Temp : ${el.temp.max}° C`;

        let minTemp = document.createElement("p");
        minTemp.innerText = `Min temp : ${el.temp.min}° C`;

        div1.append(date,maxTemp, minTemp);
        future_days.append(div1);
    });
    

}