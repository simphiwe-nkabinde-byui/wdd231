const weatherIcon = document.querySelector('#weather-icon');
const caption = document.querySelector('figcaption');
const currTemp = document.querySelector('#current-temp');

const lat = 49.75
const lon = 6.64
const apiKey = '36d682e19df5d55ae8ea9cb18436acbd'
const units = 'metric'
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`

async function apiFetch() {
    try {
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text())
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    if (weatherIcon) {
        weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        weatherIcon.alt = description;
    }
    if (currTemp) currTemp.innerHTML = `${data.main.temp} &deg;C`;
    if (caption) caption.textContent = data.weather[0].description;
}
apiFetch();