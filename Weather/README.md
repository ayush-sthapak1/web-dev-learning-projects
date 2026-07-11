# Weather App

A small vanilla JavaScript application that lets users enter a city name and retrieve the current temperature and humidity using the **Open‑Meteo** API.

## Features
- **Geocoding**: Converts a city name to latitude/longitude via the Open‑Meteo geocoding endpoint.
- **Weather data**: Fetches current temperature (`temperature_2m`) and relative humidity (`relative_humidity_2m`).
- **Live UI**: Displays the city, temperature, and humidity on the page.
- **Error handling**: Shows a friendly message if the city is not found or the API request fails.
- **No dependencies**: Pure HTML, CSS, and JavaScript.

## How it works
1. User types a city and clicks **Search**.
2. `getWeather(city)` fetches the coordinates from `https://geocoding-api.open-meteo.com/v1/search`.
3. It then requests weather data from `https://api.open-meteo.com/v1/forecast` using those coordinates.
4. Results are rendered into the `#weatherResult` element.

## Tech Stack
- HTML
- JavaScript (ES6 + async/await)

## Run locally
Open `index.html` in a browser and start searching for cities.
