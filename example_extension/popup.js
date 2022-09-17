
const button = document.createElement('button');
button.textContent = 'I drank water!'
document.body.insertAdjacentElement('afterbegin', button);

function clickButton() {
    button.addEventListener('click', () => {
        console.log('Clicked');
    })
}

chrome.notification.create({
        type: 'basic',
        title: 'Water Notification',
        message: 'Time to drink water!',
        iconUrl: '128.png',
        buttons: [{title: 'I drank water!'}],
        priority: 2
    });

chrome.notification.onButtonClicked.addEventListener()
