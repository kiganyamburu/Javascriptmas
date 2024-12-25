import { addresses } from './addresses.js'
/*
Writing out labels by hand is a real pain. Luckily, you are so organised that you have all of your contacts saved in an array.

But not all of your contacts are on your Christmas list. So your task is this:

** Task ** 
1. Render a label for each entry in the address book, but only if isOnChistmasList is set to true! The label should contain the recipient's name and address.
2. Decorate the label with two festive icons from the icons folder. Use whatever colour scheme and layout you think looks good! 

** Stretch goals **
1. Ensure that the label does not get two of the same icon.
2. Create your own CSS Christmas logo to add a personal touch to each label.
*/


const labelsContainer = document.querySelector('.labels-container');

// Array of festive icons
const icons = [
  '🎄', '🎁', '🎅', '🦌', '🌟', '❄️', '⛄️', '🔔'
];

// Function to generate a random icon
function getRandomIcon() {
  const randomIndex = Math.floor(Math.random() * icons.length);
  return icons[randomIndex];
}

// Function to create a label element
function createLabel(address) {
  const label = document.createElement('div');
  label.classList.add('label');

  const name = document.createElement('h3');
  name.textContent = address.name;

  const addressLine1 = document.createElement('p');
  addressLine1.textContent = address['address line 1'];

  const town = document.createElement('p');
  town.textContent = `${address.town}, ${address.state}, ${address.country}`;

  const icon1 = document.createElement('span');
  icon1.classList.add('icon');
  icon1.textContent = getRandomIcon();

  const icon2 = document.createElement('span');
  icon2.classList.add('icon');
  // Ensure different icons
  let icon2Value = getRandomIcon();
  while (icon2Value === icon1.textContent) {
    icon2Value = getRandomIcon();
  }
  icon2.textContent = icon2Value;

  label.appendChild(name);
  label.appendChild(addressLine1);
  label.appendChild(town);
  label.appendChild(icon1);
  label.appendChild(icon2);

  return label;
}

// Create and append labels to the container
addresses.forEach(address => {
  if (address.isOnChristmasList) {
    const label = createLabel(address);
    labelsContainer.appendChild(label);
  }
});

// Basic CSS styling (you can customize this)
const style = document.createElement('style');
style.textContent = `
  .labels-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .label {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 15px;
    text-align: center;
    background-color: #f8f8f8;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .icon {
    font-size: 2rem;
    color: #009688;
  }
`;
document.head.appendChild(style);