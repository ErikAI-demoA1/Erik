document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("chat-form");
  const input = document.getElementById("user-input");
  const chat = document.getElementById("chat-box");

  const odpovede = {
    "pes": "Pes domáci alebo pes je taxón z rodu Canis. Je to domestikovaná podoba vlka dravého. Presné zaradenie tohto taxónu v rámci rodu Canis je sporné.",
    "futbal": "Futbal, zastarano kopaná, je kolektívna loptová hra, ktorá je považovaná za najpopulárnejší šport na svete. Podľa prieskumu FIFA hrá futbal pravidelne najmenej 300 miliónov ľudí vo viac ako 220 krajinách sveta. Dôvodom jeho popularity sú jednoduché pravidlá a minimálna náročnosť na vybavenie.",
    "erikai": "ErikAI je offline umelá inteligencia vytvorená tebou.",
    "slovensko": "Slovensko, dlhý tvar Slovenská republika, je vnútrozemský štát v strednej Európe.[pozn. 2] Je členským štátom Európskej únie a NATO. Má rozlohu 49 036 km² a žije tu okolo 5 447 270 obyvateľov.[13] Na severozápade hraničí s Českom, na juhozápade s Rakúskom, na severe s Poľskom, na východe s Ukrajinou a na juhu s Maďarskom.Krajina je prevažne hornatá, pretože väčšinu povrchu zaberajú vysočiny. Zo severu sem z mohutného oblúka zasahujú Karpaty, na juhu sa rozprestiera Panónska panva. Hlavným a najväčším mestom je Bratislava, úradným jazykom je slovenčina.",
    "bratislava": "Bratislava (Prehrať slovenská výslovnosť, nem. Pressburg, maď. Pozsony, gr. Istropolis – Mesto na Dunaji; do roku 1919 Prešporok/Prešporek; iné názvy pozri nižšie) je hlavné a rozlohou aj počtom obyvateľov najväčšie mesto Slovenska. Podľa posledného sčítania obyvateľov v Bratislave k 31. decembru 2024 žilo 479 389 obyvateľov.",
    "košice": "Košice (iné názvy pozri kapitolu Názov) sú metropolou východného Slovenska a s takmer 230 000 obyvateľmi[5] druhým najľudnatejším mestom na Slovensku. Mesto je súčasťou Košickej aglomerácie s 367 000 obyvateľmi a Košicko-prešovskej aglomerácie, ktorá s 555 800 obyvateľmi patrí medzi najväčšie urbanizované oblasti na Slovensku.",
  "žilina": "Počtom obyvateľov (spolu 80 020, 38 623 mužov, 41 397 žien poďľa údajov 31.10.2024) je Žilina štvrtým najväčším mestom na Slovensku.[4] Je administratívnym, hospodárskym, dopravným a kultúrnym centrom severozápadného Slovenska, niekedy sa jej hovorí „perla na Váhu“.",
  "veľké rovné": "Veľké Rovné je obec na Slovensku v okrese Bytča, ktorá sa nachádza na severozápadnej časti Slovenska. V obci je veľa miestnych častí/osád medzi najväčšie patria: Horevsie, Rimanovice, Žarnov, Ivor.",
    "nitra": "Nitra (maď. Nyitra, nem. Neutra) je mesto ležiace v Nitrianskom kraji vzdialené približne 90 km východne od hlavného mesta Bratislavy. Preteká ňou rovnomenná rieka Nitra. Panorámu Nitry tvorí sedem pahorkov: zo severnej strany sa týči vrch Zobor, Hradná skala, Vŕšok, Kalvária, Borina, Ľupka spolu s Martinským vrchom. Prvé potvrdené historické zmienky sú z roku 828. Po meste je pomenovaná planétka (9543) Nitra. Počtom obyvateľov 75 208 je piatym najväčším mestom na Slovensku.[4]",
      "prešov": "Prešov (nem. Eperies alebo Preschau, maď. Eperjes, lat. Fragopolis alebo Eperiessinum) je krajské mesto ležiace v Prešovskom kraji. Prešov je tretím najľudnatejším mestom na Slovensku s približne 82 300 obyvateľmi. Má štyri katastrálne časti: Prešov, Šalgovík, Solivar a Nižná Šebastová. Patrí do košicko-prešovskej aglomerácie a je prirodzeným kultúrnym, hospodárskym, dopravným a administratívnym centrom regiónu Šariš.",
    "tatry": "Tatry (Prehrať slovenská výslovnosť) sú geomorfologický celok Fatransko-tatranskej oblasti a tvoria najvyššiu časť Karpát. Nachádzajú sa v severnej časti Slovenska na hranici s Poľskom. Pohorie sa rozprestiera na ploche 786 km², z toho na Slovensku 610 km². Ich alpský charakter zvýrazňuje 30 štítov a veží s výškou nad 2 500 m n. m.",
    "dunaj": "Dunaj (nem. Donau, chorv. Dunav, maď. Duna, srb. a bulh. Дунав, rum. Dunărea) je druhá najdlhšia európska rieka a najdlhšia rieka v Európskej únii. V meste Donaueschingen vzniká sútokom zdrojníc Breg a Brigach prameniacich vo Schwarzwalde (Nemecko), preteká južným Nemeckom, Rakúskom, Slovenskom, Maďarskom, Srbskom, potom tvorí po mnoho desiatok kilometrov rumunsko-bulharskú hranicu a ústi deltou do Čierneho mora na hraniciach medzi Rumunskom a Ukrajinou, pričom pri ukrajinskom meste Reni hraničí s teritóriom Moldavska.",
    "európa": "Európa je svetadiel, ktorý sa nachádza na severnej pologuli a vo východnej hemisfére. Pozostáva z najzápadnejších polostrovov kontinentálnej pevniny Eurázie, a hraničí so Severným ľadovým oceánom na severe, Atlantickým oceánom na západe, Stredozemným morom na juhu, a Áziou na východe. Európa sa bežne považuje za oblasť oddelenú od Ázie prostredníctvom povodia pohoria Ural, rieky Ural, Kaspického mora, Veľkého Kaukazu, Čierneho mora a vodných tokov Tureckej úžiny. Aj keď veľká časť tejto hranice presahuje pevninu, Európe sa všeobecne pripisuje štatút celého svetadiela pre jej veľkú fyzickú rozlohu a váhu histórie a tradícií.",
  "svet": "Svet môže byť: vo filozofii a podobne: v objektívnom ponímaní súbor všetkých (najmä hmotných) vecí, ktoré sú (t.j. v širšom zmysle vesmír a všetko prípadné ostatné, v užšom - staršom - zmysle Zem), resp. v subjektívnom ponímaní predstava o súbore všetkých vecí, ktoré sú (presná definícia ale závisí od autora), pozri svet (všetko),v kozmológii: vesmír,v bežnej komunikácii alebo v umeleckých textoch aj: Zem (resp. Zem so všetkým, čo na nej existuje),životný priestor ľudí,cudzina, najmä ďaleká; staršie aj len okolie, iný kraj,okruh ľudí s rovnakými záujmami; skupina jedincov rovnakého druhu,(všetci) ľudia, verejnosť,celkové pomery (života na Zemi alebo v jej časti), život, usporiadanie života (napr. stredoveký svet),uzavretá (najmä životná) oblasť, okruh, sféra,hviezdna sústava, planetárna sústava; nebeské teleso; galaxia.",
  "škola": "Škola je vo všeobecnosti akékoľvek výchovno-vzdelávacie zariadenie, organizácia alebo inštitúcia. Niekedy sa týmto pojmom myslí budova alebo sídlo danej inštitúcie. V užšom slova zmysle, na Slovensku, je škola inštitúcia zaradená do siete škôl a školských zariadení, ktoré majú oprávnenie uskutočňovať výchovu a vzdelávanie.",
  };

  function getAIResponse(text) {
    const lower = text.toLowerCase().trim();
    if (lower.startsWith("vyhľadaj:")) {
      const query = lower.replace("vyhľadaj:", "").trim();
      window.open("https://www.google.com/search?q=" + encodeURIComponent(query), "_blank");
      return `🔍 Vyhľadávam: ${query}`;
    }
    return odpovede[lower] || "Prepáč, túto otázku ešte nepoznám.";
  }

  function addMessage(sender, text) {
    const msg = document.createElement("div");
    msg.className = "message";
    msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chat.appendChild(msg);
    chat.scrollTop = chat.scrollHeight;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const userText = input.value.trim();
    if (!userText) return;

    addMessage("Ty", userText);
    const response = getAIResponse(userText);
    addMessage("ErikAI", response);
    input.value = "";
  });
});
