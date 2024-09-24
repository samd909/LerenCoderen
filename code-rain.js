const matrix = document.getElementById('matrix');
const numberOfLetters = 100; // Aantal letters om te genereren
const characters = '01'; // Karakters die zullen vallen

function createLetter(i) {
    const span = document.createElement('span');
    span.classList.add('code');
    span.style.setProperty('--i', i);
    span.innerText = characters[Math.floor(Math.random() * characters.length)];
    span.style.left = `${Math.random() * 100}vw`; // Willekeurige positie over de breedte
    matrix.appendChild(span);
}

for (let i = 0; i < numberOfLetters; i++) {
    createLetter(i);
}

// Voeg hover-effecten toe voor de knoppen
const javascriptButton = document.getElementById('javascriptbutton');
const laravelButton = document.getElementById('laravelbutton');

// Verander de kleur van de letters wanneer de JavaScript-knop wordt gehoverd
javascriptButton.addEventListener('mouseover', () => {
    document.querySelectorAll('.code').forEach(el => {
        el.classList.add('hover-effect');
    });
});

javascriptButton.addEventListener('mouseout', () => {
    document.querySelectorAll('.code').forEach(el => {
        el.classList.remove('hover-effect');
    });
});

// Verander de kleur van de letters wanneer de Laravel-knop wordt gehoverd
laravelButton.addEventListener('mouseover', () => {
    document.querySelectorAll('.code').forEach(el => {
        el.classList.add('hover-effect-laravel');
    });
});

laravelButton.addEventListener('mouseout', () => {
    document.querySelectorAll('.code').forEach(el => {
        el.classList.remove('hover-effect-laravel');
    });
});
