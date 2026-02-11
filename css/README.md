# Modularny CSS - Instrukcja migracji 📁

## Co się zmieniło?

Twój jeden wielki plik `style.css` (908 linii) został podzielony na **11 logicznych modułów**:

```
css/
├── style.css           ← GŁÓWNY (tylko importy)
├── base.css           ← Fonty, body, textarea
├── animations.css     ← Bąbelki i animacje
├── layout.css         ← Layout (#baner, #nawigacja, etc.)
├── navigation.css     ← Przyciski nawigacji
├── changelog.css      ← Sekcja changelog/todo
├── text-styles.css    ← Gradienty tekstowe
├── galeria.css        ← Galeria zdjęć
├── projekty.css       ← Lista projektów
├── markdown.css       ← Style dla markdown
├── music-player.css   ← Odtwarzacz muzyki
└── responsive.css     ← Wszystkie media queries
```

## Jak zainstalować?

### Opcja 1: Podmiana (ZALECANA)

1. **Usuń** stary plik `css/style.css`
2. **Skopiuj** całą zawartość folderu `css/` do swojego projektu
3. **Gotowe!** Wszystko będzie działać jak wcześniej

### Opcja 2: Stopniowa migracja

Jeśli chcesz stopniowo:
1. Skopiuj wszystkie nowe pliki do `css/`
2. Zmień w `index.html` link do CSS na tylko:
   ```html
   <link rel="stylesheet" href="css/style.css">
   ```
3. Usuń stary wielki `style.css` dopiero jak sprawdzisz że działa

## Zalety nowego systemu

✅ **Łatwość znalezienia** - chcesz zmienić galerie? Otwórz `galeria.css`
✅ **Mniejsze pliki** - żaden plik nie ma więcej niż 200 linii
✅ **Logiczna organizacja** - każdy moduł ma swoją odpowiedzialność
✅ **Łatwiejsze debugowanie** - wiesz gdzie szukać błędów
✅ **Responsywność oddzielnie** - wszystkie media queries w jednym miejscu

## Przykłady użycia

### Chcesz zmienić kolor bąbelek?
→ Otwórz `animations.css`

### Chcesz zmienić hover przycisków?
→ Otwórz `navigation.css`

### Chcesz dostosować mobile?
→ Otwórz `responsive.css` (wszystkie breakpointy w jednym miejscu!)

### Chcesz zmienić styl projektów?
→ Otwórz `projekty.css`

## Struktura każdego modułu

Każdy plik ma:
- Komentarz opisujący jego zawartość
- Tylko style związane z tym modułem
- Czytelny układ (max 200 linii)

## Co dalej?

Jak będziesz chciał dodać nowe funkcje:
1. Stwórz nowy plik CSS (np. `animacje-extra.css`)
2. Dodaj `@import url('animacje-extra.css');` w `style.css`
3. Gotowe!

## Backup

Twój oryginalny `style.css` został zapisany jako `style.css.backup` - możesz go zawsze przywrócić.

---

Miłego kodowania! 🚀
