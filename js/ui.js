class UI {
    constructor() {
        this.location = document.getElementById('location');
        this.description = document.getElementById('desc');
        this.temperature = document.getElementById('temp');
        this.icon = document.getElementById('weather-icon');
        this.humidity = document.getElementById('humidity');
        this.pressure = document.getElementById('pressure');
        this.feelsLike = document.getElementById('feels-like');
        this.wind = document.getElementById('wind');
    }
    displayWeather(data) {
        this.location.textContent = `${data.name}`;
        this.description.textContent = `${data.weather[0].description}`;
        this.temperature.textContent = `${data.main.temp} C`;

        let iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        this.icon.setAttribute('src', iconUrl);
        this.humidity.textContent = `Relative Humidity: ${data.main.humidity}%`;
        this.pressure.textContent = `Sea Level: ${data.main.pressure} hPA`;
        this.feelsLike.textContent = `Feels Like: ${data.main.feels_like} C`;
        this.wind.textContent = `Wind: ${data.wind.deg} deg at ${data.wind.speed} m/s`;
    }

    

    showModal() {
        const modal = document.querySelector('.modal');
        modal.classList.add('appear');
    }

    closeModal() {
        const modal = document.querySelector('.modal');
        modal.classList.remove('appear');
    }
}