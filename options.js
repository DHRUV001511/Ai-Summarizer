document.getElementById("save-button").addEventListener("click", () => {
  const apiKey = document.getElementById("api-key").value.trim();
  if (!apiKey) return;

  chrome.storage.sync.set({ geminiApiKey: apiKey }, () => {
    document.getElementById("success-message").style.display = "block";
    setTimeout(() => {
      document.getElementById("success-message").style.display = "none";
    }, 3000);
  });
});

window.onload = () => {
  chrome.storage.sync.get(["geminiApiKey"], (result) => {
    if (result.geminiApiKey) {
      document.getElementById("api-key").value = result.geminiApiKey;
    }
  });
};
