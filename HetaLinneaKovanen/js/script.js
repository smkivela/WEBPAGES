// Sivun JavaScript: kielenvaihto, teema, projektikortit, SVG-animaatio ja gallerian suodatus.

(function(){

  // SVG-kuvion silmät seuraavat osoitinta. data-m-painikkeita ei ole HTML:ssä,
  // joten aiempi, toimimaton strategiatilan vaihtokoodi on poistettu.

  var v = document.getElementById('venn');

  // Silmien pupillit liikkuvat osoittimen mukana.

  var eyes=[[document.getElementById('e1'),180,172],[document.getElementById('e2'),220,172]];
  window.addEventListener('pointermove',function(e){
    var r=v.getBoundingClientRect(),s=400/r.width,x=(e.clientX-r.left)*s,y=(e.clientY-r.top)*s;
    eyes.forEach(function(p){var dx=x-p[1],dy=y-p[2],d=Math.hypot(dx,dy)||1,k=Math.min(7,d)/d;p[0].setAttribute('cx',p[1]+dx*k);p[0].setAttribute('cy',p[2]+dy*k)})
  });

  // Projektikorttien tiedot sekä avattavan case-näkymän tila.

  var cs=[].slice.call(document.querySelectorAll('.case')),box=document.getElementById('open'),cur=-1,lang='en';
  var B='https://www.hetalinnea.com/';
  var D=[
  {c:'var(--mint)',u:B+'case1-marketplace-platform',
   en:{t:'Designing a Two-Sided Healthcare Marketplace',m:'Marketplace design · B2B & B2C · Product strategy · Service discovery · Provider portal',a:'As the sole Product Designer in an early-stage healthtech startup, I designed experiences for both service providers and end users within a two-sided digital marketplace.',b:'Consumers searched for suitable healthcare professionals and services, while providers managed appointments, employees, availability and service requests in their own portal. I made sure these connected experiences supported both business goals and user needs, and built a scalable foundation for growth.',n:'One designer, two sides of the market.'},
   fi:{t:'Kaksipuolisen terveysalan markkinapaikan suunnittelu',m:'Markkinapaikkasuunnittelu · B2B & B2C · Tuotestrategia · Palvelujen löydettävyys · Palveluntarjoajan portaali',a:'Olin varhaisen vaiheen terveysalan startupin ainoa Product Designer ja suunnittelin kokemukset sekä palveluntarjoajille että loppukäyttäjille kaksipuolisessa digitaalisessa markkinapaikassa.',b:'Kuluttajat etsivät sopivia terveysalan ammattilaisia ja palveluja, kun taas palveluntarjoajat hallinnoivat ajanvarauksia, työntekijöitä, saatavuutta ja palvelupyyntöjä omassa portaalissaan. Varmistin, että nämä kytkeytyvät kokemukset tukivat sekä liiketoiminnan tavoitteita että käyttäjien tarpeita, ja rakensin skaalautuvan pohjan kasvulle.',n:'Yksi suunnittelija, markkinan kaksi puolta.'}},
  {c:'var(--pink)',u:B+'case3-healthcare',
   en:{t:'Reducing complexity in clinical workflows',m:'UX research · Industrial HMI · Medical device UI/UX · Clinical workflows',a:'I led UX research and interface concept design for a next-generation washer-disinfector used in hospital sterile services departments.',b:'Through contextual research, user interviews and workflow analysis, I translated complex clinical processes into a clear, intuitive interface designed for safety, efficiency and ease of learning.',x:'UI layouts and labels have been blurred to protect sensitive data and intellectual property.',n:'Clarity in a high-responsibility environment.'},
   fi:{t:'Kliinisten työnkulkujen monimutkaisuuden vähentäminen',m:'UX-tutkimus · Teollisuuden HMI · Lääkinnällisen laitteen käyttöliittymä · Kliiniset työnkulut',a:'Vedin UX-tutkimusta ja käyttöliittymäkonseptin suunnittelua uuden sukupolven pesu-desinfektiolaitteelle, jota käytetään sairaaloiden sterilointiyksiköissä.',b:'Kontekstuaalisen tutkimuksen, käyttäjähaastattelujen ja työnkulkuanalyysin avulla käänsin monimutkaiset kliiniset prosessit selkeäksi, intuitiiviseksi käyttöliittymäksi, joka on suunniteltu turvallisuutta, tehokkuutta ja helppoa oppimista varten.',x:'Käyttöliittymien asettelut ja tekstit on sumennettu arkaluonteisen tiedon ja immateriaalioikeuksien suojaamiseksi.',n:'Selkeyttä vastuulliseen ympäristöön.'}},
  {c:'var(--sun)',u:B+'case2-enterprise',
   en:{t:'Building Structure for an Evolving Enterprise Product',m:'Enterprise UX · Information architecture · Role-based design · MVP · Information security',a:'Joining a complex enterprise project as a new hire, I rapidly built domain understanding while bringing structure to an evolving product landscape.',b:'Within an evolving MVP, I focused on role-based design, information architecture and scalable interaction patterns that brought consistency and clarity to a secure enterprise platform.',x:'UI layouts and labels have been omitted to protect sensitive data and intellectual property.',n:'New to the domain, fast to the structure.'},
   fi:{t:'Rakennetta kehittyvään yritystuotteeseen',m:'Yrityskäytön UX · Informaatioarkkitehtuuri · Roolipohjainen suunnittelu · MVP · Tietoturva',a:'Liityin monimutkaiseen yritysprojektiin uutena työntekijänä ja rakensin nopeasti alan ymmärrystä tuoden samalla rakennetta kehittyvään tuotekokonaisuuteen.',b:'Kehittyvässä MVP:ssä keskityin roolipohjaiseen suunnitteluun, informaatioarkkitehtuuriin ja skaalautuviin interaktiomalleihin, jotka toivat johdonmukaisuutta ja selkeyttä turvalliseen yritysalustaan.',x:'Käyttöliittymien asettelut ja tekstit on jätetty pois arkaluonteisen tiedon ja immateriaalioikeuksien suojaamiseksi.',n:'Uusi alalla, nopea rakentamaan rakenne.'}},
  {c:'#bfc8ff',
   en:{t:'Crafting a Mobile-First Commerce Experience',m:'Mobile commerce · UX/UI · Customer journey · Visual design · Accessibility · Concept design',a:'BloomBoost is a self-initiated UX/UI concept exploring how design can help small businesses create memorable digital experiences.',b:'I designed a mobile-first concept for a fictional flower shop, focusing on service discovery, navigation and visual storytelling, with strong branding and accessible colour palettes.',n:'Small business, big impression.'},
   fi:{t:'Mobiili edellä -kauppakokemuksen luominen',m:'Mobiilikauppa · UX/UI · Asiakaspolku · Visuaalinen suunnittelu · Saavutettavuus · Konseptisuunnittelu',a:'BloomBoost on oma UX/UI-konseptini siitä, miten design voi auttaa pieniä yrityksiä luomaan mieleenpainuvia digitaalisia kokemuksia.',b:'Suunnittelin mobiili edellä -konseptin kuvitteelliselle kukkakaupalle keskittyen palvelujen löydettävyyteen, navigaatioon ja visuaaliseen tarinankerrontaan vahvan brändin ja saavutettavien värien avulla.',n:'Pieni yritys, vahva vaikutelma.'}}];
  var L={en:{v:'View case study',n:'Next project',c:'Close',i:'Image'},fi:{v:'Lue case study',n:'Seuraava projekti',c:'Sulje',i:'Kuva'}};
  function ui(k){return '<div class="pui img"><svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="M4 18l5-5 4 4 3-3 4 4"/></svg><span>'+L[lang].i+' '+k+'</span></div>'}

  // Rakentaa valitun projektin yksityiskohtaisen esittelyn.

  function show(i){
    cur=i;var D0=D[i],d=D0[lang],l=L[lang];
    cs.forEach(function(c,k){c.setAttribute('aria-expanded',k===i)});
    box.innerHTML='<div class="ph" style="background:'+D0.c+'"><div><h3>'+d.t+'</h3><p class="meta">'+d.m+'</p><div class="stk"><div>'+d.a+'</div><div>'+d.b+'</div>'+(d.x?'<div class="nt">'+d.x+'</div>':'')+'</div>'+(D0.u?'<a class="btn" href="'+D0.u+'">'+l.v+'</a>':'')+'</div><div class="fan">'+ui(1)+ui(2)+ui(3)+'</div><p class="hand"><span>'+d.n+'</span></p><div class="acts"><button type="button" id="nx">'+l.n+'</button><button type="button" id="cl">'+l.c+'</button></div></div>';
    var f=box.querySelector('.fan');requestAnimationFrame(function(){requestAnimationFrame(function(){f.classList.add('go')})});
    document.getElementById('nx').onclick=function(){show((cur+1)%cs.length)};
    document.getElementById('cl').onclick=function(){box.innerHTML='';cs[cur].setAttribute('aria-expanded','false');cs[cur].focus();cur=-1};
    box.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth',block:'nearest'});
  }
  cs.forEach(function(c,i){c.setAttribute('role','button');c.tabIndex=0;c.setAttribute('aria-expanded','false');
    c.addEventListener('click',function(){cur===i?document.getElementById('cl').click():show(i)});
    c.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();c.click()}})});
  var T={'Alongside product design, I work as an illustrator and visual artist. Here are selected series, exhibitions and works.':'Tuotesuunnittelun ohella työskentelen kuvittajana ja kuvataiteilijana. Tässä valikoituja sarjoja, näyttelyitä ja teoksia.','All':'Kaikki','Illustration':'Kuvitus','Exhibitions':'Näyttelyt','Animation':'Animaatio','Work title':'Teoksen nimi','Year · technique':'Vuosi · tekniikka','Series title':'Sarjan nimi','Write about the series here: the idea, the materials, where it has been shown. This area can hold several paragraphs.':'Kirjoita sarjasta tähän: idea, materiaalit ja missä se on ollut esillä. Tähän mahtuu useita kappaleita.','Replace this with one sentence that sums up your artistic practice.':'Korvaa tämä yhdellä lauseella, joka tiivistää taiteellisen työsi.','Reset':'Palauta','Image placeholder':'Kuvan paikka','Projects':'Projektit','Mentoring':'Mentorointi','Fine Arts':'Kuvataide','Contact':'Yhteys',
  'Need to turn a complex product into something people actually understand?':'Haluatko tehdä monimutkaisesta tuotteesta jotain, minkä ihmiset oikeasti ymmärtävät?',
  "For over a decade, I've helped organisations and teams bring clarity to complex ideas through thoughtful design.":'Yli kymmenen vuoden ajan olen auttanut organisaatioita ja tiimejä tuomaan selkeyttä monimutkaisiin ideoihin harkitun designin avulla.',
  'See projects':'Katso projektit','Design mentoring':'Design-mentorointi',"Illustrator's eyes":'Kuvittajan silmin',"Strategist's eyes":'Strategin silmin',
  'User':'Käyttäjä','Business':'Liiketoiminta','Technology':'Teknologia','Product':'Tuote','Past projects':'Aiemmat projektit',
  'Marketplace design · B2B & B2C · Product strategy':'Markkinapaikkasuunnittelu · B2B & B2C · Tuotestrategia',
  'UX research · Medical device UI · HMI':'UX-tutkimus · Lääkinnällisen laitteen käyttöliittymä · HMI',
  'Enterprise UX · Information architecture · MVP':'Yrityskäytön UX · Informaatioarkkitehtuuri · MVP',
  'Mobile commerce · UX/UI · Accessibility':'Mobiilikauppa · UX/UI · Saavutettavuus',
  'Click a project to open it.':'Avaa projekti klikkaamalla.',
  'Beyond the interface':'Käyttöliittymän tuolla puolen','Creative practice':'Luova työ','Cross-disciplinary background':'Monialainen tausta','How I work':'Tapani työskennellä',
  'A decade across illustration, exhibitions and animation: 15+ grants, shown across Finland and screened at festivals in Europe.':'Kymmenen vuotta kuvituksen, näyttelyiden ja animaation parissa: yli 15 apurahaa, töitä esillä ympäri Suomea ja festivaaleilla Euroopassa.',
  "Design education, a business degree, a full-stack bootcamp and an ongoing Master's in design and innovation management.":'Muotoilukoulutus, tradenomin tutkinto, full stack -bootcamp ja meneillään oleva maisteriopinto design- ja innovaatiojohtamisessa.',
  'Open communication and psychological safety, because trust shapes both team wellbeing and product quality.':'Avoin viestintä ja psykologinen turvallisuus, koska luottamus vaikuttaa sekä tiimin hyvinvointiin että tuotteen laatuun.',
  'I also work as a design mentor':'Toimin myös design-mentorina',
  "I'm a Design Mentor at Grafia, the Finnish association of visual communicators, where I support designers in the mentoring programme.":'Olen Grafian design-mentori ja tuen suunnittelijoita yhdistyksen mentorointiohjelmassa.',
  "My business degree helps me talk about design in the language of business: how to justify decisions, how to show results and how to connect your work to an organisation's goals.":'Tradenomitaustani auttaa puhumaan designista businessin kielellä: miten päätökset perustellaan, miten tulokset osoitetaan ja miten oma työ kytketään organisaation tavoitteisiin.',
  'Typical topics:':'Tyypillisiä aiheita:','building a portfolio':'portfolion rakentaminen','telling case stories':'casejen kerronta','strategic thinking':'strateginen ajattelu','career choices':'urapolun valinnat','visual identity':'visuaalinen ilme',
  'Comments about me':'Palautetta minusta','People and Communication Lead':'Henkilöstö- ja viestintävastaava','Senior Application Developer':'Vanhempi sovelluskehittäjä','Head of Automation':'Automaatiopäällikkö',
  "Let's talk about your product!":'Puhutaan sinun tuotteestasi!'};
  D.forEach(function(x){T[x.en.t]=x.fi.t});
  var A={'Filter works':'Suodata teokset','Main menu':'Päävalikko','View':'Näkymä','Language':'Kieli','Switch theme':'Vaihda teema','Three overlapping circles: user, business and technology. In the middle is the product.':'Kolme päällekkäistä ympyrää: käyttäjä, liiketoiminta ja teknologia. Keskellä on tuote.'};
  var TT={en:'Heta-Linnea Kovanen – Product designer & design mentor',fi:'Heta-Linnea Kovanen – Product designer ja design-mentori'};

  // Kääntää sivun tekstisolmut T-sanakirjan avulla. Case-näkymä käännetään erikseen.

  function tr(){
    var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:function(n){return n.parentNode.closest('#open,script,style')?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),n;
    while((n=w.nextNode())){
      if(n.__en===undefined){if(!n.nodeValue.trim())continue;n.__en=n.nodeValue}
      var k=n.__en.trim();
      if(T[k]!==undefined)n.nodeValue=lang==='fi'?n.__en.replace(k,function(){return T[k]}):n.__en;
    }
    document.querySelectorAll('[aria-label]').forEach(function(e){
      if(e.dataset.en===undefined)e.dataset.en=e.getAttribute('aria-label');
      e.setAttribute('aria-label',lang==='fi'&&A[e.dataset.en]?A[e.dataset.en]:e.dataset.en);
    });
  }
  var lb=document.querySelectorAll('[data-l]');

  // Vaihtaa kielen, päivittää saavutettavuustekstit ja tallentaa valinnan.

  function setLang(l,keep){
    lang=l;document.documentElement.lang=l;document.title=TT[l];tr();
    lb.forEach(function(b){b.setAttribute('aria-pressed',b.dataset.l===l)});
    if(cur>=0)show(cur);
    if(!keep)try{localStorage.setItem('lang',l)}catch(e){}
  }
  lb.forEach(function(b){b.addEventListener('click',function(){setLang(b.dataset.l)})});

  // Ympyröiden raahaus, kasvoanimaatio ja piilotettu onnistumisreaktio.

  var faceG=v.querySelector('.face'),mo=document.getElementById('mo'),cc=[].slice.call(v.querySelectorAll('.c1,.c2,.c3')),toast=document.getElementById('toast'),rs=document.getElementById('rs'),egged=false,pills=[].slice.call(v.querySelectorAll('.pill'));
  var orig=cc.map(function(c){return[+c.getAttribute('cx'),+c.getAttribute('cy')]}),HAPPY='M178 208 Q200 228 222 208',OH='M190 214 a10 10 0 1 0 20 0 a10 10 0 1 0 -20 0';
  function pos(c){return[+c.getAttribute('cx'),+c.getAttribute('cy')]}
  function upd(){var x=0,y=0;cc.forEach(function(c){var p=pos(c);x+=p[0];y+=p[1]});faceG.setAttribute('transform','translate('+(x/3-200)+' '+(y/3-178.33)+')');cc.forEach(function(c,i){var p=pos(c);pills[i].setAttribute('transform','translate('+(p[0]-orig[i][0])+' '+(p[1]-orig[i][1])+')')})}
  function near(){for(var i=0;i<3;i++)for(var j=i+1;j<3;j++){var a=pos(cc[i]),b=pos(cc[j]);if(Math.hypot(a[0]-b[0],a[1]-b[1])>26)return false}return true}
  function back(c,ox,oy){var p=pos(c),x=p[0],y=p[1],vx=0,vy=0;cancelAnimationFrame(c.__r);(function f(){vx=(vx+(ox-x)*.12)*.78;vy=(vy+(oy-y)*.12)*.78;x+=vx;y+=vy;c.setAttribute('cx',x);c.setAttribute('cy',y);upd();if(Math.abs(ox-x)+Math.abs(oy-y)+Math.abs(vx)+Math.abs(vy)>.3)c.__r=requestAnimationFrame(f);else{c.setAttribute('cx',ox);c.setAttribute('cy',oy);upd()}})()}
  function win(){
    egged=true;toast.textContent=lang==='fi'?'Product–market fit löytyi!':'Product–market fit!';toast.classList.add('on');
    if(!matchMedia('(prefers-reduced-motion:reduce)').matches){
      var st=document.querySelector('.stage'),cols=['#2F4BFF','#FF6B8B','#FFD23F','#6FD6B0'];
      for(var n=0;n<36;n++){var p=document.createElement('span');p.style.cssText='position:absolute;left:50%;top:42%;width:8px;height:12px;border-radius:2px;pointer-events:none;background:'+cols[n%4];st.appendChild(p);
        var a=Math.random()*6.283,d=80+Math.random()*160;
        p.animate([{transform:'translate(0,0) rotate(0)',opacity:1},{transform:'translate('+Math.cos(a)*d+'px,'+(Math.sin(a)*d+80)+'px) rotate('+(Math.random()*720-360)+'deg)',opacity:0}],{duration:1400+Math.random()*600,easing:'cubic-bezier(.2,.8,.3,1)'}).onfinish=(function(el){return function(){el.remove()}})(p)}
    }
    setTimeout(function(){toast.classList.remove('on');egged=false},3500);
  }
  cc.forEach(function(c){
    var sx,sy,ox,oy,mv=0,on=false;
    c.addEventListener('pointerdown',function(e){on=true;mv=0;cancelAnimationFrame(c.__r);c.setPointerCapture(e.pointerId);sx=e.clientX;sy=e.clientY;var p=pos(c);ox=p[0];oy=p[1];v.classList.add('drag');mo.setAttribute('d',OH);e.preventDefault()});
    c.addEventListener('pointermove',function(e){if(!on)return;var k=400/v.getBoundingClientRect().width,dx=e.clientX-sx,dy=e.clientY-sy;mv=Math.max(mv,Math.hypot(dx,dy));
      c.setAttribute('cx',Math.min(380,Math.max(20,ox+dx*k)));c.setAttribute('cy',Math.min(380,Math.max(20,oy+dy*k)));upd()});
    function end(){if(!on)return;on=false;v.classList.remove('drag');mo.setAttribute('d',HAPPY);
      if(mv<5)return;
      rs.hidden=false;if(!egged&&near())win()}
    c.addEventListener('pointerup',end);c.addEventListener('pointercancel',end);
  });
  rs.addEventListener('click',function(){cc.forEach(function(c,i){back(c,orig[i][0],orig[i][1])});rs.hidden=true});

  // Kuvataideteosten suodatus kategorian mukaan.

  document.querySelectorAll('.chips button').forEach(function(b){b.addEventListener('click',function(){

    // Kuvataideteosten suodatus kategorian mukaan.

  document.querySelectorAll('.chips button').forEach(function(x){x.setAttribute('aria-pressed',x===b)});
    document.querySelectorAll('.art').forEach(function(a){a.hidden=b.dataset.f!=='all'&&a.dataset.c!==b.dataset.f})})});


// Tumma/vaalea teema ja asetusten palautus.

var root = document.documentElement;

// Palautetaan tallennettu teema tai käytetään tummaa oletuksena.
try {
var st = localStorage.getItem('th');
root.dataset.theme = st || 'dark';

var sl = localStorage.getItem('lang');
if (sl === 'fi') setLang('fi', true);

} catch (e) {
root.dataset.theme = 'dark';
}

// Teeman vaihtopainike.
document.getElementById('th').addEventListener('click', function () {
var t = root.dataset.theme === 'dark' ? 'light' : 'dark';
root.dataset.theme = t;

try {
  localStorage.setItem('th', t);
} catch (e) {}

});

})();