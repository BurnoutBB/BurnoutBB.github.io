/* ===== PRZEŁĄCZNIK MOTYWÓW ===== */

// Dostępne motywy
const themes = {
    ocean: 'css/themes/ocean.css',
    sunset: 'css/themes/sunset.css',
    forest: 'css/themes/forest.css',
    fire: 'css/themes/fire.css'
};

// Załaduj zapisany motyw lub użyj domyślnego
function loadTheme() {
    const savedTheme = localStorage.getItem('selectedTheme') || 'ocean';
    applyTheme(savedTheme);
    
    // Ustaw wybrany motyw w selectie
    const themeSelector = document.getElementById('themeSelector');
    if (themeSelector) {
        themeSelector.value = savedTheme;
    }
}

// Zastosuj wybrany motyw
function applyTheme(themeName) {
    // Usuń stary link do motywu (jeśli istnieje)
    const oldThemeLink = document.getElementById('theme-css');
    if (oldThemeLink) {
        oldThemeLink.remove();
    }
    
    // Dodaj nowy link do motywu
    const themeLink = document.createElement('link');
    themeLink.id = 'theme-css';
    themeLink.rel = 'stylesheet';
    themeLink.href = themes[themeName];
    
    // Dodaj przed głównym CSS (żeby zmienne były dostępne)
    const mainCSS = document.querySelector('link[href*="style.css"]');
    if (mainCSS) {
        mainCSS.parentNode.insertBefore(themeLink, mainCSS);
    } else {
        document.head.appendChild(themeLink);
    }
    
    // Zapisz wybór
    localStorage.setItem('selectedTheme', themeName);
}

// Zmień motyw
function changeTheme(themeName) {
    applyTheme(themeName);
    
    // Dodaj efekt fade
    document.body.style.transition = 'opacity 0.3s ease';
    document.body.style.opacity = '0.8';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 300);
}

// Załaduj motyw po załadowaniu strony
window.addEventListener('DOMContentLoaded', loadTheme);

// Event listener dla selecta
document.addEventListener('DOMContentLoaded', function() {
    const themeSelector = document.getElementById('themeSelector');
    if (themeSelector) {
        themeSelector.addEventListener('change', function() {
            changeTheme(this.value);
        });
    }
});
