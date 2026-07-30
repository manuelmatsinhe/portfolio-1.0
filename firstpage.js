/**
 * ----------------------------------------------------
 * Theme Management
 * ----------------------------------------------------
 * Applies the selected theme (light/dark) based on local storage or system preferences.
 */
function applyTheme(theme) {
    if (theme === 'light') {
        document.documentElement.classList.add('light-mode');
    } else {
        document.documentElement.classList.remove('light-mode');
    }
}

function initTheme() {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        applyTheme(currentTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        applyTheme('light');
    }

    // Listen to OS theme changes
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) applyTheme(e.matches ? 'light' : 'dark');
    });
}
initTheme();

/**
 * ----------------------------------------------------
 * Card Interactions
 * ----------------------------------------------------
 * Flips the intro ID card to reveal the back.
 */
function flipCard() {
    const card = document.getElementById('portfolioCard');
    if (card) card.classList.toggle('flipped');
}

/**
 * Generates random realistic ID numbers on page load.
 */
window.onload = function () {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    // Generate 10-character ID card number
    let result = '';
    for (let i = 0; i < 10; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
        if (i === 4) result += '-'; // Format as XXXXX-XXXXX
    }
    const idElement = document.getElementById('randomId');
    if (idElement) idElement.innerText = result;

    // Generate 6-character access ID
    let accessResult = '';
    for (let i = 0; i < 6; i++) {
        accessResult += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    const accessIdElement = document.getElementById('accessId');
    if (accessIdElement) accessIdElement.innerText = accessResult;
}

/**
 * ----------------------------------------------------
 * Navigation
 * ----------------------------------------------------
 * Transitions the user to the main portfolio and prevents going back.
 */
function enterPortfolio(event) {
    if (event) event.preventDefault();
    sessionStorage.setItem('enteredPortfolio', 'true');
    window.location.replace('main.html');
    return false;
}
