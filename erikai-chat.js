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
