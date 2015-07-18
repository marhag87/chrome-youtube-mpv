chrome.pageAction.onClicked.addListener(function(tab) {
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    // Connect
    var hostName = "se.mrhg.youtube_mpv";
    port = chrome.runtime.connectNative(hostName);

    var url = tabs[0].url;
    message = {"text": url};

    // Send message
    port.postMessage(message);
    console.log(message);
  });
  chrome.tabs.executeScript({
    code: 'document.getElementsByClassName("html5-main-video")[0].pause()'
  });
});

function checkForValidUrl(tabId, changeInfo, tab) {
  if (tab.url.indexOf('https://www.youtube.com/watch') == 0) {
    chrome.pageAction.show(tabId);
  }
};

chrome.tabs.onUpdated.addListener(checkForValidUrl);
