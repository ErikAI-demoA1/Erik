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

  function getAIResponse(text) {
    if (text.startsWith("vyhľadaj:")) {
      const query = text.replace("vyhľadaj:", "").trim();
      window.open("https://www.google.com/search?q=" + encodeURIComponent(query), "_blank");
      return `🔍 Vyhľadávam: ${query}`;
    }

    switch (text) {
      case "pes":
        return "Pes je verný štvornohý spoločník.";
      case "futbal":
        return "Futbal je najpopulárnejší šport na svete.";
      case "erikai":
        return "ErikAI je offline umelá inteligencia vytvorená Erikom Mohylákom.";
      default:
        return "Prepáč, túto otázku ešte nepoznám.";
    }
  }
});
