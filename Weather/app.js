const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherResult = document.getElementById("weatherResult");

async function getWeather(city){

   try{
    const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);

    const data = await response.json();
    if(!data.results){
        weatherResult.innerHTML="Please Enter a valid city name";
        return;
    }
    const latitude = data.results[0].latitude;
    const longitude = data.results[0].longitude;

    const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m`);
    const weatherData = await weatherResponse.json();

    const temperature = weatherData.current.temperature_2m;
    const humidity = weatherData.current.relative_humidity_2m;
    
    weatherResult.innerHTML = `<h2>${city}</h2>
                                <p>Temperature: ${temperature}°C</p>
                                <p>Humidity: ${humidity}%</p>`;
    } catch (erro) {
        weatherResult.innerHTML = "Something went wrong";
    }
}

searchBtn.addEventListener("click", () =>{
    const city = cityInput.value.trim();

    if(!city) return;
    getWeather(city);
})

