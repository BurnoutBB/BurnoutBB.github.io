// ========== ZAWARTOŚCI STRON ==========

const zawartosci = {
    // ---------- O MNIE ----------
    'O mnie': `
        <textarea readonly>
Cześć jestem Kacper

Interesuje się chyba każdą dziedziną technologii ale każdą po trochę i żadną na poważnie. Myślałem czy nie iść na studia jakieś np cyberbezpieczeństwo lub coś takiego ale nie wiem czy mi się chce. Słucham Polskiego podziemia, Gram w gierki różne najwięcej chyba w Minecrafta ale tylko na modach. Gdybym miał wymienić TOP 3 swoje gry ulubione to Minecraft, Cyberpunk i Fortnite. Lubię Neon Genesis Evangelion, Breaking Bad, Initial D też było spoko. Mało rzeczy w sumie oglądam. O jeszcze Rick i Morty lubię ale denerwują mnie ludzie co się uważają za mądrzejszych jak to oglądają to mega cringowe. Uwielbiam ostre jedzenie, oranżadę Hellenę, wszelkiego rodzaju makaron. Nie ma nic lepszego niż makaron. W sumie to lubię gotować całkiem. Jestem fanatykiem LECZO.

Stronkę zrobiłem tak na 70% samodzielnie tło i bąbelki są AI, potrzebowałem też pomocy z gradientem na tekście
        </textarea>
    `,

    // ---------- GALERIA ----------
'Galeria': `
    <div class="galeria-lista">
        <div class="galeria-item">
            <img src="tło.png" alt="Zdjęcie 1" class="galeria-miniatura">
            <div class="galeria-info">
                <h2>Tło tej strony</h2>
                <p>AI tło którego użyłem na tej stronie</p>
            </div>
        </div>
        
        <div class="galeria-item">
            <img src="osp.jpg" alt="Zdjęcie 2" class="galeria-miniatura">
            <div class="galeria-info">
                <h2>OSP w Minecraft</h2>
                <p>OSP z mojego miasta które odwzorowałem w Minecraft</p>
            </div>
        </div>
        
        <div class="galeria-item">
            <img src="przychodnia.jpg" alt="Zdjęcie 3" class="galeria-miniatura">
            <div class="galeria-info">
                <h2>Przychodnia w Minecraft</h2>
                <p>Przychodnia z mojego miasta którą odwzorowałem w Minecraft</p>
            </div>
        </div>
        
        <div class="galeria-item">
            <img src="kosciol.jpg" alt="Zdjęcie 4" class="galeria-miniatura">
            <div class="galeria-info">
                <h2>KOSCIÓŁ w Minekraft</h2>
                <p>Chyba moja najlepsza budowla kiedykolwiek </p>
            </div>
        </div>
    </div>
`,
    // ---------- KONTAKT ----------
    'Kontakt': `
        <textarea>
TE NAZWY SĄ PRAWDZIWE TO NIE JEST LOSOWE KLIKANIE W KLAWIATURĘ

E-mail: kacper_swoboda@proton.me
Discord: asdhegaiwka62729
Instagram: anwvzmalq63528182
YouTube: @burnoutbb

        </textarea>
    `,

    // ---------- SPRZĘT ----------
    'Sprzet': `
        <textarea readonly>
Tyle lat już zbieram złom że trochę się tego nazbierało, zacznę może od mojego głównego kompa którego kupiłem za pieniądze zarobione w Fabryce czekolady XDD

- Ryzen 5 5600 
- RTX 2070 Super PNY
- MSI B550 Gaming Plus 
- Lexar 32GB (4x8GB) 3600Mhz CL18 Thor White
- Lexar 1TB M.2 PCIe NVMe NM620
- Seasonic B12 650W 80 Plus Bronze
- Krux VAKO
- Arctic Freezer 36

Mam jeszcze drugi komputer ale jego specyfikacji nie znam bo nie włączałem go z 3 lata chyba a nie chcę skłamać. Jest to mój pierwszy komputer jakikiedykolwiek miałem dlaeto wciąż go trzymam. Działa na Windowsie XP i ma mnóstwo pirackich gier.

Jest jeszcze 3 komputer ale to jakiś losowy ulep którego nawet nie używam. Jakaś i7 3 generacji i 8GB DDR3.

Monitory? Szczerze to nic konkretnego nie mogę o nich powiedzieć. Główny to jakieś rozbebeszone AIO którego nie da się włączyć w cywilizowany sposób więc startuje odrazu kiedy go podepnę do prądu a drugi to jakiś losowy biurowy DELL.

- Klawiaturka Krux Meteor
- Myszka Logitech g102 
- Słuchawki SuperLux 330 

Telefon mam bardzo fikuśny akurat i bardzo mało popularny, z racji iż nie ma wejścia słuchawkowego sprawiłem sobie od razu słuchawki bluetooth.

- Awei A780BL
- Motorola ThinkPhone 

Przed Motorolą chyba 3 lata aż miałem Realme 8 i sprawował się naprawdę bardzo dobrze ale wejście ładowania już miał tak rozklekotane że nie warto byo go naprawiać, mam jeszcze Samsunga Galaxy a20e. Aktualnie jest tam wgrany custom rom LineageOS i działa to naprawdę sprawnie mimo 32GB pamięci i 3GB ramu. Z telefonow to jeszcze kilka się znajdzie ale to już nic ciekawego Realme c35, jakaś stara Motorola, Huawei Y3 i pewnie coś jeszcze.

Konsolki mam dwie. I to ze swojej ulubionej generacji konsol czyli 7.

- Xbox 360 E
- Playstation 3 Super Slim

Szkoda niestety że PlayStation to SuperSlim bo CFW odpada i muszę męczyć się z HENem, Xbox niestety bez przeróbki ale i tak gram na nim tylko w Kinect Sports.+

Laptopy mam aż 4 i nie korzystam na co dzień z żadnego chociaż myślałem czy nie postawić na nich jakiegoś JellyFina + FTP 

- Jakiś Asus fikuśny co ma 32GB pamięci
- Kolejny Asus z jakąś i3 
- HP Pavilion G6 
- Asus ExpertBook jakiś tam 

Tabletów to mam chyba 5 też z nich nie korzystam, jednego tylko czasem do czytania książek ale to rzadko.

Sprzętu mam jeszcze sporo ale nie ma co wymieniać jakichś drukarek, lutownic czy telewizorów.
        </textarea>
    `
};

// ========== OBSŁUGA PRZYCISKÓW ==========

const buttons = document.querySelectorAll('.naw_button');
const zawartosc = document.getElementById('zawartosc');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const nazwaSekcji = button.querySelector('span').textContent;
        
        // Fade out
        zawartosc.style.opacity = '0';
        
        // Po 300ms zmień zawartość i fade in
        setTimeout(() => {
            zawartosc.innerHTML = zawartosci[nazwaSekcji];
            zawartosc.style.opacity = '1';
        }, 150);
    });
});