import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailForm = document.querySelector('[name="email"]');
const messageForm = document.querySelector('[name="message"]');

form.addEventListener('input', throttle(onMessage, 500));

let formData = {};

updateOutput();
function onMessage(event) {
    event.preventDefault();
    formData = { email: emailForm.value, message: messageForm.value };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const savedData = localStorage.getItem('feedback-form-state');
    console.log(savedData);
    form.reset();
    localStorage.clear();
})

function updateOutput() {
    saveData = localStorage.getItem('feedback-form-state');
    const parseData = JSON.parse(saveData);
    
if (saveData) {
    emailForm.value = parseData.email || "";
    messageForm.value = parseData.message || "";
}}