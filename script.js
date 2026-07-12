const apiKey = "4f9e03024209e17101f0ac60afd1b154";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
 async function checkWeather(city){

    const response =await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();
    if (response.status === 404)
   //  !response.ok
    {
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
   return; 
   }
    else
    {
      document.querySelector(".error").style.display = "none";
      document.querySelector(".weather").style.display = "block";
    }
  
    console.log(data.weather[0].main);

    document.querySelector(".city").innerHTML =data.name;
   
    document.querySelector(".temp").innerHTML = 
    Math.round(data.main.temp) + "°C";


    document.querySelector(".humidity").innerHTML =
    data.main.humidity + "%";


    document.querySelector(".wind").innerHTML =
    data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds"){
       weatherIcon.src ="images 2/clouds.png";
    }
   else if (data.weather[0].main == "Clear"){
       weatherIcon.src ="images 2/clear.png";
    }
  
    else if (data.weather[0].main == "Rain"){
       weatherIcon.src ="images 2/rain.png";
    }
    else if (data.weather[0].main == "Drizzle"){
       weatherIcon.src ="images 2/drizzle.png";
    }
    else if (data.weather[0].main == "Mist"){
       weatherIcon.src ="images 2/mist.png";
    }
    else if (data.weather[0].main == "Snow"){
       weatherIcon.src ="images 2/snow.png";
    }
 }
searchBtn.addEventListener("click", () =>{
checkWeather(searchBox.value);
});
searchBox.addEventListener("keydown", function (event) {
   console.log(event.key);
if (event.key === "Enter"){
   checkWeather(searchBox.value);
 
}
});