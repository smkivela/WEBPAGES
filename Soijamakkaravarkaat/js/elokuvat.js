(() => {
    const ruudukko = document.querySelector('.elokuvat');
    const kortit = ruudukko.querySelectorAll('.elokuva');
    let soitin = null;

    function sulje(palautaFokus) {
        if (!soitin) return;
        const valittu = ruudukko.querySelector('.valittu');
        soitin.remove();
        soitin = null;
        if (valittu) {
            valittu.classList.remove('valittu');
            if (palautaFokus) valittu.querySelector('.juliste').focus();
        }
    }

    function avaa(kortti) {
        sulje(false);

        const id = kortti.dataset.video;
        const nimi = kortti.dataset.title;

        soitin = document.createElement('div');
        soitin.className = 'soitin';

        const kehys = document.createElement('div');
        kehys.className = 'kehys';

        const iframe = document.createElement('iframe');
        iframe.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?autoplay=1&rel=0';
        iframe.title = nimi + ', short film';
        iframe.allow = 'autoplay; encrypted-media; picture-in-picture; web-share; fullscreen';
        iframe.referrerPolicy = 'strict-origin-when-cross-origin';
        iframe.allowFullscreen = true;
        kehys.appendChild(iframe);

        const sulkija = document.createElement('button');
        sulkija.type = 'button';
        sulkija.className = 'sulje';
        sulkija.textContent = 'Close video';
        sulkija.addEventListener('click', () => sulje(true));

        soitin.append(kehys, sulkija);
        ruudukko.after(soitin);
        kortti.classList.add('valittu');

        const rauhallinen = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        soitin.scrollIntoView({ behavior: rauhallinen ? 'auto' : 'smooth', block: 'nearest' });
    }

    kortit.forEach(kortti => {
        kortti.querySelector('.juliste').addEventListener('click', e => {
            e.preventDefault();
            avaa(kortti);
        });
    });
})();