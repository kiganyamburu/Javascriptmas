const snowGlobe = document.querySelector('.snow-globe')

function createSnowflake() {
    const snowflake = document.createElement('div')
    snowflake.classList.add('snowflake')
    snowflake.textContent = '❄️';


    const startPosition = Math.random() * snowGlobe.offsetWidth;
    snowflake.style.right = `${startPosition}px`;

    const size = Math.random() * 10 + 10;
    snowflake.style.fontSize = `${size}px`;

    const duration = Math.random() * 3 + 2;
    snowflake.style.animationDuration = `${duration}s`;

    snowGlobe.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, duration * 1000);
}




/* 
Challenge:
1. Write JavaScript to create a snowflake and make it fall inside the snow globe. The snowflake should have a random starting position, animation duration, and size.
2. See index.css
*/


setInterval(createSnowflake, 100) // Let's create a snowflake every 100 milliseconds!

/* Stretch goals: 
- Give some variety to your snowflakes, so they are not all the same. Perhaps every 25th one could be a snowman ☃️?
- Remove each snowflake after a set time - this will stop the scene from being lost in a blizzard!
- Add a button that makes the snow start falling, it could trigger a CSS-animated shake of the snow globe. Then make the snow become less frequent until it slowly stops - until the button is pressed again.  
- Change the direction of the snowflakes so they don’t all fall vertically.
- Make the style your own! 
*/



// const snowGlobe = document.querySelector('.snow-globe');
// const toggleButton = document.createElement('button');
// let snowInterval;
// let snowfallFrequency = 100;

// // Add button to control snowfall
// toggleButton.textContent = 'Start Snowfall';
// toggleButton.style.position = 'absolute';
// toggleButton.style.top = '20px';
// toggleButton.style.left = '50%';
// toggleButton.style.transform = 'translateX(-50%)';
// toggleButton.style.padding = '10px 20px';
// toggleButton.style.fontSize = '16px';
// toggleButton.style.cursor = 'pointer';
// document.body.appendChild(toggleButton);

// function createSnowflake() {
//     const snowflake = document.createElement('div');
//     snowflake.classList.add('snowflake');
//     snowflake.textContent = '❄️';

//     // Randomize starting position
//     const startPosition = Math.random() * snowGlobe.offsetWidth;
//     snowflake.style.left = `${startPosition}px`;

//     // Randomize size
//     const size = Math.random() * 10 + 10; // size between 10px and 20px
//     snowflake.style.fontSize = `${size}px`;

//     // Randomize animation duration
//     const duration = Math.random() * 3 + 2; // duration between 2s and 5s
//     snowflake.style.animationDuration = `${duration}s`;

//     // Add snowflake to the snow globe
//     snowGlobe.appendChild(snowflake);

//     // Remove snowflake after it falls
//     setTimeout(() => {
//         snowflake.remove();
//     }, duration * 1000); // Convert duration to milliseconds
// }

// function toggleSnowfall() {
//     if (snowInterval) {
//         clearInterval(snowInterval);
//         snowInterval = null;
//         toggleButton.textContent = 'Start Snowfall';
//     } else {
//         snowGlobe.classList.add('shake'); // Add shake animation
//         setTimeout(() => snowGlobe.classList.remove('shake'), 500); // Remove shake after animation

//         let frequency = snowfallFrequency;
//         snowInterval = setInterval(() => {
//             createSnowflake();
//             frequency += 50; // Gradually decrease frequency
//             if (frequency > 1000) {
//                 clearInterval(snowInterval);
//                 snowInterval = null;
//                 toggleButton.textContent = 'Start Snowfall';
//             }
//         }, frequency);
//         toggleButton.textContent = 'Stop Snowfall';
//     }
// }

// // Attach event listener to button
// toggleButton.addEventListener('click', toggleSnowfall);
