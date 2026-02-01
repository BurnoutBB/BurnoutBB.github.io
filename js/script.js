// ========== OBSŁUGA MARKDOWN ==========

// Prosta funkcja konwertująca markdown na HTML
function markdownToHtml(markdown) {
    let html = markdown;
    
    // Nagłówki
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
    
    // Pogrubienie - musi być PRZED kursywą
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    
    // Kursywa - zarówno * jak i _
    html = html.replace(/\*([^\*]+?)\*/g, '<em>$1</em>');
    html = html.replace(/_([^_]+?)_/g, '<em>$1</em>');
    
    // Listy nieuporządkowane
    html = html.replace(/^\- (.+)$/gim, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
    
    // Separator poziomy
    html = html.replace(/^---$/gim, '<hr>');
    
    // Akapity
    html = html.split('\n\n').map(para => {
        if (!para.match(/^<[hul]/) && para.trim() !== '') {
            return '<p>' + para + '</p>';
        }
        return para;
    }).join('\n');
    
    return html;
}

// ========== ŚCIEŻKI DO PLIKÓW MARKDOWN ==========

const zawartosciPaths = {
    'O mnie': 'markdown/o-mnie.md',
    'Kontakt': 'markdown/kontakt.md',
    'Sprzet': 'markdown/sprzet.md'
};

// ========== ZAWARTOŚĆ GALERII (HTML) ==========

const galeriaHTML = `
    <div class="galeria-lista">
        <div class="galeria-item">
            <img src="img/tło.png" alt="Zdjęcie 1" class="galeria-miniatura">
            <div class="galeria-info">
                <h2>Tło tej strony</h2>
                <p>AI tło którego użyłem na tej stronie</p>
            </div>
        </div>
        
        <div class="galeria-item">
            <img src="img/osp.jpg" alt="Zdjęcie 2" class="galeria-miniatura">
            <div class="galeria-info">
                <h2>OSP w Minecraft</h2>
                <p>OSP z mojego miasta które odwzorowałem w Minecraft</p>
            </div>
        </div>
        
        <div class="galeria-item">
            <img src="img/przychodnia.jpg" alt="Zdjęcie 3" class="galeria-miniatura">
            <div class="galeria-info">
                <h2>Przychodnia w Minecraft</h2>
                <p>Przychodnia z mojego miasta którą odwzorowałem w Minecraft</p>
            </div>
        </div>
        
        <div class="galeria-item">
            <img src="img/kosciol.jpg" alt="Zdjęcie 4" class="galeria-miniatura">
            <div class="galeria-info">
                <h2>KOŚCIÓŁ w Minekraft</h2>
                <p>Chyba moja najlepsza budowla kiedykolwiek</p>
            </div>
        </div>
    </div>
`;

// ========== FUNKCJA ŁADUJĄCA ZAWARTOŚĆ ==========

async function loadContent(nazwaSekcji) {
    const zawartosc = document.getElementById('zawartosc');
    
    // Fade out
    zawartosc.style.opacity = '0';
    
    setTimeout(async () => {
        if (nazwaSekcji === 'Galeria') {
            // Galeria to HTML
            zawartosc.innerHTML = galeriaHTML;
            
            // Obsługa kliknięć w miniatury
            const miniatury = document.querySelectorAll('.galeria-miniatura');
            miniatury.forEach(img => {
                img.addEventListener('click', () => {
                    window.open(img.src, '_blank');
                });
            });
        } else {
            // Ładowanie markdown
            const path = zawartosciPaths[nazwaSekcji];
            if (path) {
                try {
                    const response = await fetch(path);
                    const markdown = await response.text();
                    const html = markdownToHtml(markdown);
                    zawartosc.innerHTML = `<div class="markdown-content">${html}</div>`;
                } catch (error) {
                    zawartosc.innerHTML = '<p>Błąd ładowania zawartości</p>';
                    console.error('Błąd ładowania markdown:', error);
                }
            }
        }
        
        // Fade in
        zawartosc.style.opacity = '1';
    }, 150);
}

// ========== OBSŁUGA PRZYCISKÓW ==========

const buttons = document.querySelectorAll('.naw_button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const nazwaSekcji = button.querySelector('span').textContent;
        loadContent(nazwaSekcji);
    });
});

// ========== ŁADOWANIE DOMYŚLNEJ ZAWARTOŚCI ==========

window.addEventListener('DOMContentLoaded', () => {
    loadContent('O mnie');
});