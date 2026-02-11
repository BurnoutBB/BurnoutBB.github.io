# System Motywów - Instrukcja Instalacji 🎨

## Dostępne motywy:

1. **Ocean** (niebieski) - domyślny
2. **Sunset** (fioletowy) - ciepły wieczorny vibe
3. **Forest** (zielony) - naturalna zieleń
4. **Fire** (czerwony) - intensywny i energiczny

## Szybka instalacja (dla początkujących):

### Krok 1: Dodaj pliki
Skopiuj do swojego projektu:
- `css/themes/` - folder z motywami
- `css/theme-switcher.css` - style przełącznika
- `js/theme-switcher.js` - logika przełączania

### Krok 2: Dodaj do HTML

W `<head>` dodaj (PRZED głównym style.css):
```html
<link rel="stylesheet" href="css/theme-switcher.css">
```

Na końcu `<body>` (przed zamknięciem </body>) dodaj:
```html
<!-- Przełącznik motywów -->
<div id="theme-switcher">
    <label for="themeSelector">Motyw:</label>
    <select id="themeSelector">
        <option value="ocean">Ocean 🌊</option>
        <option value="sunset">Sunset 🌅</option>
        <option value="forest">Forest 🌲</option>
        <option value="fire">Fire 🔥</option>
    </select>
</div>

<script src="js/theme-switcher.js"></script>
```

### Krok 3: Gotowe! 🎉

Odśwież stronę - w prawym górnym rogu zobaczysz przełącznik motywów.
Wybór zostanie zapisany w localStorage!

---

## Zaawansowane: Dostosowanie CSS do zmiennych

Aby motywy FAKTYCZNIE działały, musisz zamienić twarde kolory na zmienne CSS.

### Jak to zrobić?

Otwórz plik `css/themes/EXAMPLE_jak_uzywac_zmiennych.css` - tam są przykłady.

### Przykład zamiany:

**PRZED:**
```css
.bubble {
    background: rgba(199, 255, 255, 0.15);
    border: 2px solid rgba(199, 255, 255, 0.3);
}
```

**PO:**
```css
.bubble {
    background: var(--bubble-bg);
    border: 2px solid var(--bubble-border);
}
```

### Lista zmiennych dostępnych w każdym motywie:

**Kolory główne:**
- `--primary-light` - jasny główny
- `--primary-mid` - średni główny
- `--primary-dark` - ciemny główny

**Akcenty:**
- `--accent-1` do `--accent-5` - różne odcienie akcentu

**Outline:**
- `--outline-normal` - normalne obramowanie
- `--outline-hover` - obramowanie przy hover
- `--outline-light` - jasne obramowanie

**Tekst:**
- `--text-primary` - główny kolor tekstu
- `--text-secondary` - drugorzędny tekst
- `--text-light` - jasny tekst

**Bąbelki:**
- `--bubble-bg` - tło bąbelki
- `--bubble-border` - obramowanie bąbelki
- `--bubble-shadow` - cień bąbelki

**Inne:**
- `--stroke-color` - kolor obrysu tekstu
- `--bg-image` - ścieżka do tła

---

## Dodawanie własnego motywu

1. Skopiuj `css/themes/ocean.css`
2. Zmień nazwę np. na `midnight.css`
3. Zmień wartości kolorów
4. Dodaj w `js/theme-switcher.js`:
```javascript
const themes = {
    ocean: 'css/themes/ocean.css',
    sunset: 'css/themes/sunset.css',
    forest: 'css/themes/forest.css',
    fire: 'css/themes/fire.css',
    midnight: 'css/themes/midnight.css' // NOWY!
};
```
5. Dodaj w HTML:
```html
<option value="midnight">Midnight 🌙</option>
```

---

## FAQ

**Q: Czemu motywy nie działają?**
A: Prawdopodobnie twój CSS jeszcze nie używa zmiennych. Musisz zamienić twarde kolory na `var(--nazwa-zmiennej)`.

**Q: Czy muszę zamieniać WSZYSTKIE kolory?**
A: Nie! Możesz zacząć od najważniejszych elementów (np. bąbelki, nawigacja) i stopniowo zamieniać resztę.

**Q: Jak zresetować do domyślnego motywu?**
A: Wybierz "Ocean" z menu, albo wyczyść localStorage w konsoli: `localStorage.removeItem('selectedTheme')`

**Q: Czy mogę mieć różne tła dla różnych motywów?**
A: Tak! Zmień wartość `--bg-image` w każdym pliku motywu.

---

Powodzenia! 🚀
