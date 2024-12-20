// mySolution.js
const hackButton = document.createElement('button');
hackButton.textContent = 'Hack!';
hackButton.style.position = 'absolute';
hackButton.style.top = '0';
hackButton.style.left = '0';
document.body.appendChild(hackButton);

hackButton.addEventListener('click', () => {
  console.log('You have been hacked 🏴‍☠️');
});