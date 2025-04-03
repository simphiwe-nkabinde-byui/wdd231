const weeksDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
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
            const fullForecast = data.list.map(item => {
                return {
                    day: new Date(item.dt_txt).getDay(),
                    icon: item.weather[0].icon,
                    temp: item.main.temp,
                    description: item.weather[0].description
                }
            });
            // get single forecast for each day
            let uniqueForecast = fullForecast.filter((e, i, self) => i === self.findIndex((item) => item.day === e.day));

            // convert day index to day name
            uniqueForecast.forEach(item => {
                item.day = weeksDays[item.day]
            });
            uniqueForecast.splice(3)
            displayWeatherForecast(uniqueForecast);
        } else {
            const errResponse = await response.json();
            throw Error(errResponse.message)
        }
    } catch (error) {
        
    }
    
}

function displayWeatherForecast(data) {
    const container = document.querySelector('#weather-forecast .info-card-body');
    if (!container) return;
    const html = data.map(day => `
        <li>
            <span>${day.day}:</span>
            <span>${day.temp}&deg;C</span>
            <img width='25' class='weather-icon' src='https://openweathermap.org/img/wn/${day.icon}.png' alt='${day.description}'/>
        </li>
    `).join('');

    container.innerHTML = `<ul class='forecast-list'>${html}</ul>`
}
function displayCurrentWeather(data) {
    const container = document.querySelector('#weather-current .info-card-body');
    if (!container) return;
    const html = `
            <img width='65' class='weather-icon' src='https://openweathermap.org/img/wn/${data.weather[0].icon}.png' alt='${data.weather[0].description}'/>
            <span>${data.weather[0].description}</span>
            <span><strong>${data.main.temp} &deg;C</strong></span>
            <span>High: ${data.main.temp_max} &deg;C</span>
            <span>Low: ${data.main.temp_min} &deg;C</span>
            <span>Humidity: ${data.main.humidity}%</span>
            <span>Sunrise: ${new Date(data.sys.sunrise).toLocaleTimeString()}</span>
            <span>Sunset: ${new Date(data.sys.sunset).toLocaleTimeString()}</span>
    `;
    container.innerHTML = html

}
getCurrentWeather();
getWeatherForecast();