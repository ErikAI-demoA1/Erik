document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("chat-form");
  const input = document.getElementById("user-input");
  const chat = document.getElementById("chat-box");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const userText = input.value.trim();
    if (!userText) return;

    addMessage("Ty", userText);
    const response = getAIResponse(userText.toLowerCase());
    addMessage("ErikAI", response);
    input.value = "";
  });

  function addMessage(sender, text) {
    const msg = document.createElement("div");
    msg.className = "message";
    msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chat.appendChild(msg);
    chat.scrollTop = chat.scrollHeight;
  }
const odpovede = {
  "pes": "Pes je verný štvornohý spoločník.",
  "futbal": "Futbal je najpopulárnejší šport na svete.",
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
});
