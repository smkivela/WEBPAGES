Samuli Kivelä: Kotisivu


<!--  Rakenne -->



index.html          Etusivu: palvelut, audioreel, lomake
pages/work.html     Valitut työt 
thanks.html         Kiitossivu lomakkeen jälkeen (jos JavaScript ei ole käytössä)
pages/cv.html       CV, tälle on oma css. Aukeaa uuteen välilehteen.
css/style.css       Etusivun ja Work-sivun tyylit
css/cv.css          CV:n tyylit
Kuvat/              Kuvat ja favicon
Kuvat/tyot/         Work-sivun julisteet pakattuina (alkuperäiset gitissä, commit 46c421f)




<!-- Keskeiset ratkaisut -->



-h1 ja slogan tulee animaatiolla sisään sivun latautuessa. Käytin sloganiin hieman viivettä, jotta se tulee vähän h1:n jälkeen. Animaatiossa käytetty opacitya sekä bluria.

-Headerin alareuna on tehty kuperaksi. Kupera reuna on tehty clip-path: ellipsellä. Annoin tätä varten headerille ylimääräisen containerin html:ssä.

-Headerin taustakuva on feidattu mustaan väriin vasemmalle. Tämä on tehty before-pseudoelementillä.

-Otsikoiden fontti haettu google fontseista.

-Etusivun programmin-kortin svg-kuva on pyydetty claudelta.

-Javascript-toteutukset on tehty clauden kanssa. Javascriptin opiskelu on vielä kesken.




<!-- Suunnittelupäätökset -->



1. Etusivun ja work-sivun kortit latautuvat scrollatessa.

2. Hoveria ja focus-visibleä käytetty rinnan. Puhelimella testattuna work-sivun hover tapahtuu napauttamalla.

3. Otsikko ja slogan skaalautuvat clamp-funktiolla.

4. CV:llä on tarkoituksellisesti oma tyyli. Se avautuu myös omaan välilehteen. Tein siihen itselleni print-median, jotta saan cv:n kätevästi pdf:nä tarvittaessa.

5. Mobiilissa navigaation, sloganin ja h1:n paikat muuttuvat, jotta ulkoasu näyttäisi hyvältä ja tekstit erottuisivat taustakuvasta.

6. Audioreel on ohitettu tabindexillä, koska selain jäi jumiin siihen eikä päässyt lomakkeeseen asti.''

7. Google drive upotus toimi mobiilissa huonosti, joten kapeammilla näytöillä sen tilalla on linkki audioreeliin.

<!-- Saavutettavuus -->

-Html on semanttinen (header, main, nav, footer, section)
-Näkyvä focusvisible linkeissä ja napeissa
-Alt-tekstit kuvissa ja aria-labelit ruudunlukijaa varten.
-Eri levyiset näytöt huomioitu.

<!-- Testattu -->

-Selaimet: Tietokoneella ja mobiilissa: Chrome ja Safari. Mobiilissa testattu android sekä ios.
-Näkymät: Devtoolsissa eri näytön leveydet.
-Näppäimistöllä navigointi

<!-- Kehittämiskohteet -->

-Audioreel on Google Driven upotus, jonka ulkoasuun en voi vaikuttaa.
-Lomake lähetetään Netlify Formsilla, joka välittää viestit sähköpostiin. Toimii vain Netlifyssä julkaistuna (ei GitHub Pagesissa).




<!-- Clauden tekemät parannukset (marraskuu 2026) -->



Saavutettavuus
-Ohituslinkki ("Skip to main content") etusivulla ja work-sivulla.
-Yhtenäinen, selvästi näkyvä focus-visible kaikissa linkeissä ja napeissa myös CV:ssä.
-Nykyinen sivu navigaatiossa merkitään värin lisäksi alleviivauksella.
-Navigaation kosketusalueet vähintään 44px korkeita.
-Uuteen välilehteen aukeaville linkeille ruudunlukijateksti "(opens in a new tab)".
-Audioreelin linkki näkyy nyt myös leveällä näytöllä, koska iframe on ohitettu tabindexillä.
-Äänialtolle pysäytä/toista-nappi (WCAG 2.2.2). Animaatio pysähtyy myös, kun aalto ei ole näkyvissä.
-Otsikon background-clip: text vaihdettu tavalliseksi väriksi, koska se piilotti otsikon Windowsin suurikontrastitilassa. Lisäksi forced-colors-tyylit.
-Lomakkeeseen autocomplete-attribuutit, ohjeteksti, virheellisen kentän korostus (:user-invalid) ja role="status"-viesti.

Semantiikka
-Yhteydenotto siirretty main-elementin sisään. Etusivulla otsikot Services ja Audio reel.
-Palvelukortit ja työkortit ovat article-elementtejä h3-otsikoilla. Otsikkotasot eivät hyppää.
-Work-sivun kortit: otsikko on nappi (aria-expanded), joka avaa kuvauksen. Toimii hiirellä, näppäimistöllä ja puhelimella. Esc sulkee.
-CV: summaryjen sisällä oikeat h2-otsikot, työlistat ul-listoina, aikavälit kelvollisina time-elementteinä.
-CV: sivupalkki DOMissa pääsisällön jälkeen, jotta ruudunlukija lukee nimen ja profiilin ensin. Grid pitää sen silti vasemmalla.
-Koristeaallot piilotettu ruudunlukijalta (aria-hidden).

Suorituskyky
-Work-sivun kuvat pakattu 34 Mt → 3,1 Mt. Headerkuva 960 kt → 364 kt.
-Kuville width/height (ei hyppimistä latautuessa) ja loading="lazy".
-Google Fontsit yhdellä pyynnöllä.

Ulkoasu
-Osioiden otsikot otsikkofontilla ja kultaisella viivalla.
-Palvelukortit gridissä, hover-nosto, hinta omalla rivillään.

