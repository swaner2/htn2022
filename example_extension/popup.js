let button = document.getElementById('notify-button');
button.textContent = 'I drank water!'
document.body.insertAdjacentElement('afterbegin', button);

let clicker_counter = 0
let progress = 0
let percent = 0

button.addEventListener('click', () => {
    console.log('clicked');
    clicker_counter = clicker_counter + 1;
    progress = clicker_counter * 0.05
    progress = progress.toFixed(2) * 100 + '%'
    percent = progress
  })
