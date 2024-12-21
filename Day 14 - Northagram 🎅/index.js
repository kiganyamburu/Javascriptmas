/*
The cool people of Lapland are bored of traditional social media and have decided to build their own app called Northagram...and they need your help!

This is how the app should work:
- It displays circular avatars of the friends who have uploaded pictures lately. These avatars have a white border.
- Underneath, it cycles through the friends' pictures displaying each for 1.5 seconds. (There's an animated snowman loading state before pictures load.)
- While a friend's pictures are being displayed, that friend's avatar gets a red border.
- This red border reverts to white when their pictures have finished being displayed.
- When all of the images have been displayed, the user should see a message "Refresh to load latest images". All avatars should have a white border at this point.

Stretch Goals for dedicated Social Media Engineers

- Add captions to the images.
- Refactor your code to use generators!
- Grey out the avatar after that friend's pictures have been displayed.
- Make it so clicking on an image pauses the timer.
- Add left and right arrow overlays to the image so users can scroll back and forth.
*/

import { feedData } from './data.js';

const avatarContainer = document.querySelector('.avatars');
const imageContainer = document.querySelector('.image-container');
const messageContainer = document.querySelector('.message-container');
const loadingAnimation = document.querySelector('.loading-animation');

function createAvatar(friend) {
  const avatar = document.createElement('div');
  avatar.classList.add('avatar');
  avatar.style.backgroundImage = `url(${friend.avatar})`;
  return avatar;
}

function displayAvatars() {
  avatarContainer.innerHTML = '';
  feedData.forEach(friend => {
    const avatar = createAvatar(friend);
    avatarContainer.appendChild(avatar);
  });
}

function displayImage(friendIndex) {
  imageContainer.innerHTML = '';
  const friend = feedData[friendIndex];
  const image = document.createElement('img');
  image.src = friend.images[0];
  image.alt = `${friend.name}'s Image`; 
  imageContainer.appendChild(image);
}

function cycleThroughImages() {
  let currentFriendIndex = 0;
  const intervalId = setInterval(() => {
    // Highlight current friend's avatar
    const avatars = avatarContainer.querySelectorAll('.avatar');
    avatars.forEach(avatar => avatar.style.border = '2px solid white');
    avatars[currentFriendIndex].style.border = '2px solid red';

    // Display image
    loadingAnimation.style.display = 'block';
    setTimeout(() => {
      loadingAnimation.style.display = 'none';
      displayImage(currentFriendIndex);
    }, 1000); // Simulated loading time

    currentFriendIndex = (currentFriendIndex + 1) % feedData.length; 

    if (currentFriendIndex === 0) {
      clearInterval(intervalId);
      messageContainer.style.display = 'block'; 
    }
  }, 1500); 
}

displayAvatars();
cycleThroughImages(); 

// Stretch Goal: Refactor with Generator
/*
function* imageCycler() {
  let currentFriendIndex = 0;
  while (true) {
    yield currentFriendIndex;
    currentFriendIndex = (currentFriendIndex + 1) % feedData.length;
  }
}

const imageIterator = imageCycler();
// ... use imageIterator.next().value in the interval 
*/