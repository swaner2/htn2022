let button = document.getElementById('notify-button');
button.textContent = 'I drank water!'
document.body.insertAdjacentElement('afterbegin', button);

let clicker_counter = 0
let progress = 0

button.addEventListener('click', () => {
    clicker_counter = clicker_counter + 1;
    progress = progress + 5;

    chrome.alarms.create('testAlarm', {
        when: Date.now(),
        periodInMinutes: 0.2
    })
  })

chrome.alarms.onAlarm.addEventListener((alarm) => {
    if (alarm.name === "testAlarm") {
        chrome.notification.create('popup', {
            priority: 2
        })
    }
})