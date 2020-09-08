class Weather {
    constructor(city) {
        this.city = city;
        this.apiKey = 'c0547415abc826d35bbf6d8e94de2692';
    }

    // Fetch Weather data from API
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apiKey}`);

        const responseData = await response.json();

        return responseData;
    }

    // Change and update weather Location
    changeLocation(city) {
        this.city = city;
    }
}