document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("chat-form");
  const input = document.getElementById("user-input");
  const chat = document.getElementById("chat-box");

  const odpovede = {
    "pes": "Pes domáci alebo pes je taxón z rodu Canis. Je to domestikovaná podoba vlka dravého. Presné zaradenie tohto taxónu v rámci rodu Canis je sporné.",
    "futbal": "Futbal, zastarano kopaná, je kolektívna loptová hra, ktorá je považovaná za najpopulárnejší šport na svete. Podľa prieskumu FIFA hrá futbal pravidelne najmenej 300 miliónov ľudí vo viac ako 220 krajinách sveta. Dôvodom jeho popularity sú jednoduché pravidlá a minimálna náročnosť na vybavenie.",
    "erikai": "ErikAI je offline umelá inteligencia vytvorená tebou.",
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
