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

// ========== PARSOWANIE LISTY ZDJĘĆ ==========

function parseZdjeciaLista(tekst) {
    const zdjecia = [];
    const bloki = tekst.split('>').filter(b => b.trim() !== '');
    
    bloki.forEach(blok => {
        const srcMatch = blok.match(/photo_src="([^"]+)"/);
        const titleMatch = blok.match(/photo_title="([^"]+)"/);
        const descMatch = blok.match(/photo_desc="([^"]+)"/);
        
        if (srcMatch && titleMatch && descMatch) {
            zdjecia.push({
                src: srcMatch[1],
                title: titleMatch[1],
                desc: descMatch[1]
            });
        }
    });
    
    return zdjecia;
}

// ========== PARSOWANIE LISTY PROJEKTÓW ==========

function parseProjektyLista(tekst) {
    const projekty = [];
    const bloki = tekst.split('>').filter(b => b.trim() !== '');
    
    bloki.forEach(blok => {
        const tytulMatch = blok.match(/projekt_tytul="([^"]+)"/);
        const opisMatch = blok.match(/projekt_opis="([^"]+)"/);
        const linkMatch = blok.match(/projekt_link="([^"]+)"/);
        
        if (tytulMatch && opisMatch) {
            projekty.push({
                tytul: tytulMatch[1],
                opis: opisMatch[1],
                link: linkMatch ? linkMatch[1] : null
            });
        }
    });
    
    return projekty;
}

// ========== GENEROWANIE HTML GALERII ==========

function generateGaleriaHTML(zdjecia) {
    let html = '<div class="galeria-lista">';
    
    zdjecia.forEach((zdjecie, index) => {
        html += `
        <div class="galeria-item">
            <img src="${zdjecie.src}" alt="Zdjęcie ${index + 1}" class="galeria-miniatura">
            <div class="galeria-info">
                <h2>${zdjecie.title}</h2>
                <p>${zdjecie.desc}</p>
            </div>
        </div>
        `;
    });
    
    html += '</div>';
    return html;
}

// ========== GENEROWANIE HTML PROJEKTÓW ==========

function generateProjektyHTML(projekty) {
    let html = '<div class="projekty-lista">';
    
    projekty.forEach((projekt, index) => {
        const linkStart = projekt.link ? `<a href="${projekt.link}" target="_blank" class="projekt-link">` : '<div class="projekt-no-link">';
        const linkEnd = projekt.link ? '</a>' : '</div>';
        
        html += `
        <div class="projekt-item">
            ${linkStart}
                <div class="projekt-info">
                    <h2>${projekt.tytul}</h2>
                    <p>${projekt.opis}</p>
                </div>
            ${linkEnd}
        </div>
        `;
    });
    
    html += '</div>';
    return html;
}

// ========== FUNKCJA ŁADUJĄCA ZAWARTOŚĆ ==========

async function loadContent(nazwaSekcji) {
    const zawartosc = document.getElementById('zawartosc');
    
    // Fade out
    zawartosc.style.opacity = '0';
    
    setTimeout(async () => {
        if (nazwaSekcji === 'Galeria') {
            // Wczytaj listę zdjęć z pliku
            try {
                const response = await fetch('zdjecia_lista.txt');
                const tekst = await response.text();
                const zdjecia = parseZdjeciaLista(tekst);
                const galeriaHTML = generateGaleriaHTML(zdjecia);
                
                zawartosc.innerHTML = galeriaHTML;
                
                // Obsługa kliknięć w miniatury
                const miniatury = document.querySelectorAll('.galeria-miniatura');
                miniatury.forEach(img => {
                    img.addEventListener('click', () => {
                        window.open(img.src, '_blank');
                    });
                });
            } catch (error) {
                zawartosc.innerHTML = '<p>Błąd ładowania galerii</p>';
                console.error('Błąd ładowania zdjecia_lista.txt:', error);
            }
        } else if (nazwaSekcji === 'Projekty') {
            // Wczytaj listę projektów z pliku
            try {
                const response = await fetch('projekty_lista.txt');
                const tekst = await response.text();
                const projekty = parseProjektyLista(tekst);
                const projektyHTML = generateProjektyHTML(projekty);
                
                zawartosc.innerHTML = projektyHTML;
            } catch (error) {
                zawartosc.innerHTML = '<p>Błąd ładowania projektów</p>';
                console.error('Błąd ładowania projekty_lista.txt:', error);
            }
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