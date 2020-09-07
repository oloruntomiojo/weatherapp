// Init Class Object
const ui = new UI;

document.getElementById('change-location').addEventListener('click', ui.showModal);
document.getElementById('close-btn').addEventListener('click', ui.closeModal);
document.querySelector('.close').addEventListener('click', ui.closeModal);