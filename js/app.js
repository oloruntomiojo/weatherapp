// Init Class Object
const ui = new UI;
const http = new Weather('Lagos');


document.addEventListener('DOMContentLoaded', startFetch);

function startFetch() { 
    http.getWeather()
    .then(data => {
        ui.displayWeather(data);
        console.log(data);
    })
    .catch(err => console.log(err));
 }














document.getElementById('change-location').addEventListener('click', ui.showModal);
document.getElementById('close-btn').addEventListener('click', ui.closeModal);
document.querySelector('.close').addEventListener('click', ui.closeModal);


