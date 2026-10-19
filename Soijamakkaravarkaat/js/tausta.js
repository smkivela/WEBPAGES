(() => {
    const video = document.querySelector('.tausta video');
    if (!video) return;

    // Video vain leveällä näytöllä ja jos käyttäjä ei ole pyytänyt vähemmän liikettä
    const sallittu = window.matchMedia(
        '(min-width: 701px) and (prefers-reduced-motion: no-preference)'
    ).matches;
    if (!sallittu) return;

    // Kuva vaihtuu videoon vasta, kun video oikeasti toistuu
    video.addEventListener('playing', () => {
        video.classList.add('nakyy');
        video.parentElement.classList.add('video-paalla');
    }, { once: true });

    video.src = video.dataset.src;
    video.play().catch(() => {});
})();