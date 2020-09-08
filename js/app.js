// Init Storage
const storage = new Storage();

// Load city name from local storage if any
const storedLocation = storage.getLocationData();

// Init Weather
const weather = new Weather(storedLocation);

// Init UI
const ui = new UI();

document.addEventListener('DOMContentLoaded', startFetch);

function startFetch() {
    weather.getWeather()
        .then(data => {
            ui.displayWeather(data);
        })
        .catch(err => console.log(err));
}

//  Event Listeners
~function events() {
    document.getElementById('change-location').addEventListener('click', ui.showModal);
    document.getElementById('close-btn').addEventListener('click', ui.closeModal);
    document.querySelector('.close').addEventListener('click', ui.closeModal);
    document.getElementById('save-btn').addEventListener('click', changeLocationEvent);
}();

function changeLocationEvent() {
    const city = document.getElementById('city').value;

    // change location
    weather.changeLocation(city);

    // get and display data for new city
    startFetch();

    // persist to local storage
    storage.setLocationData(city);

    ui.closeModal()
}