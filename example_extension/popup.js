let button = document.getElementById('notify-button');
button.textContent = 'I drank water!'
document.body.insertAdjacentElement('afterbegin', button);

button.addEventListener('click', () => {
    console.log('Clicked');
  })
