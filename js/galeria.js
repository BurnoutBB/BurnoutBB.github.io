// ========== OBSŁUGA PRZYCISKÓW ==========

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const nazwaSekcji = button.querySelector('span').textContent;
        
        zawartosc.style.opacity = '0';
        
        setTimeout(() => {
            zawartosc.innerHTML = zawartosci[nazwaSekcji];
            zawartosc.style.opacity = '1';
            
            // Obsługa kliknięć w miniatury
            if (nazwaSekcji === 'Galeria') {
                const miniatury = document.querySelectorAll('.galeria-miniatura');
                miniatury.forEach(img => {
                    img.addEventListener('click', () => {
                        window.open(img.src, '_blank');
                    });
                });
            }
        }, 150);
    });
});