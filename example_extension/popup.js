var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

let button = document.getElementById('notify-button');
button.textContent = 'I drank water!'
document.body.insertAdjacentElement('afterbegin', button);

let clicker_counter = 0
let progress = 0
let percent = 0

button.addEventListener('click', () => {
    clicker_counter = clicker_counter + 1;
    progress = clicker_counter * 0.05
    progress = progress.toFixed(2) * 100 + '%'
    percent = progress
  })

chrome.alarms.onAlarm.addEventListener((alarm) => {
    if (alarm.name === "testAlarm") {
        chrome.notification.create('popup', {
            priority: 2
        })
    }
})
