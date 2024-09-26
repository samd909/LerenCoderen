const wheel = document.getElementById('wheel');
const spinButton = document.getElementById('spinButton');

let deg = 0;

spinButton.addEventListener('click', () => {
    // Generate a random number of spins between 5 and 10
    const randomSpins = Math.floor(Math.random() * 5) + 5;
    const randomDeg = randomSpins * 360;

    // Calculate the total degrees to rotate (adding the random degree)
    deg = deg + randomDeg;

    // Apply rotation to the wheel
    wheel.style.transform = `rotate(${deg}deg)`;
});
