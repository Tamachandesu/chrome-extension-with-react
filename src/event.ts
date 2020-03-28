// Listen to messages sent from other parts of the extension.
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // onMessage must return "true" if response is async.
  let isResponseAsync = false;

  if (request.popupMounted) {
      console.log('eventPage notified that Popup.tsx has mounted.');
  } else {
    alert(`original text ${request.text}`); 
    sendResponse({ text: "summarized Text" });
  }
  return isResponseAsync;
});

