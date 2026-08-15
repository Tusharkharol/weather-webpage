const apikey = "af20645210ee89c9fc6e208f08984434";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".WeatherName");


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data)
    
    document.querySelector(".cityName").innerHTML= data.name;
    document.querySelector(".tempD").innerHTML=Math.round(data.main.temp)+ " °c" ;
    document.querySelector(".percent").innerHTML= data.main.humidity + "%";
    document.querySelector(".KM").innerHTML= data.wind.speed + "km/h";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src = "cloud.png";
    }else if(data.weather[0].main=="Clear"){
        weatherIcon.src = "sun.png"
    }else if(data.weather[0].main=="Drizzel"){
        weatherIcon.src = "heavy-rain.png"
    }else if(data.weather[0].main=="Mist"){
        weatherIcon.src = "weather.png"
    }else if(data.weather[0].main==""){
        weatherIcon.src = ""
    }else if(data.weather[0].main=="Rain"){
        weatherIcon.src = "heavy-rain.png"
    }
}                     

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

