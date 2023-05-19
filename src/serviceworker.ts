export {};
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.selectedText) {
    const selectedText = request.selectedText;
    const anchorEl = request.anchorEl;
    console.log(selectedText);
  }
});
