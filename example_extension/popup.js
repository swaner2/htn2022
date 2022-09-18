let button = document.getElementById('notify-button');
button.textContent = 'I drank water!'
document.body.insertAdjacentElement('afterbegin', button);

let clicker_counter = 0
let progress = 0

button.addEventListener('click', () => {
    console.log('Clicked');
    clicker_counter = clicker_counter + 1;
    progress = progress + 0.05
  })
