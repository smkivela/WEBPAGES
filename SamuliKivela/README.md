Samuli Kivelä: Kotisivu


<!--  Rakenne -->



index.html          Etusivu: palvelut, audioreel, lomake
pages/work.html     Valitut työt 
pages/cv.html       CV, tälle on oma css. Aukeaa uuteen välilehteen.
css/style.css       Etusivun ja Work-sivun tyylit
css/cv.css          CV:n tyylit
Kuvat/              Kuvat ja favicon




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

-Lomake ei vielä lähetä viestejä; `action` on placeholder myöhempää varten.
-Audioreel on Google Driven upotus, jonka ulkoasuun en voi vaikuttaa.
