export {};
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.selectedText && request.isExtensionEnabled) {
    chrome.contextMenus.create({
      id: "Highlights",
      title: "Add to Highlights",
      type: "normal",
      contexts: ["all"],
    });
  }
});
