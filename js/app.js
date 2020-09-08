// Init Class Object
const ui = new UI;
const weather = new Weather('Lagos');


document.addEventListener('DOMContentLoaded', startFetch);

function startFetch() { 
    weather.getWeather()
    .then(data => {
        ui.displayWeather(data);
        console.log(data);
    })
    .catch(err => console.log(err));
 }

//  Event Listeners
function events() { 
    document.getElementById('change-location').addEventListener('click', ui.showModal);
document.getElementById('close-btn').addEventListener('click', ui.closeModal);
document.querySelector('.close').addEventListener('click', ui.closeModal);
 }

events();

document.getElementById('save-btn').addEventListener('click', () => {
    const city = document.getElementById('city').value;

    // change location and update value of city in weather class
    weather.changeLocation(city);

    // get result data for new city
    startFetch();

    ui.closeModal()
});



