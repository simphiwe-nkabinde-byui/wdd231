const lat = -26.14
const lon = 28.42
const apiKey = '36d682e19df5d55ae8ea9cb18436acbd'
const units = 'metric'

async function getCurrentWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`
    try {
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json();
            displayCurrentWeather(data);
        } else {
            const errResponse = await response.json();
            throw Error(errResponse.message)
        }
    } catch (error) {
        console.log({error});
    }
}

async function getWeatherForecast(params) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`
    try {
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            // console.log(data.list.map(item => (new Date(item.dt_txt))));
            // displayWeatherForecast(data);
        } else {
            const errResponse = await response.json();
            throw Error(errResponse.message)
        }
    } catch (error) {
        
    }
    
}

function displayWeatherForecast(data) {
    
}
function displayCurrentWeather(data) {
    const html = `
            <img width='65' class='weather-icon' src='https://openweathermap.org/img/wn/${data.weather[0].icon}.png' alt='${data.weather[0].description}'/>
            <span>${data.weather[0].description}</span>
            <span><strong>${data.main.temp} &deg;C</strong></span>
            <span>High: ${data.main.temp_max} &deg;C</span>
            <span>Low: ${data.main.temp_min} &deg;C</span>
            <span>Humidity: ${data.main.humidity}%</span>
            <span>Sunrise: ${new Date(data.sys.sunrise).toLocaleTimeString()}</span>
            <span>Sunset: ${new Date(data.sys.sunset).toLocaleTimeString()}</span>
    `
    const container = document.querySelector('#weather-current .info-card-body');
    container.innerHTML = html

}
getCurrentWeather();
getWeatherForecast();