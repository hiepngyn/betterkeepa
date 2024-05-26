chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete' && tab.url.includes("https://www.amazon.com")) {
        chrome.storage.local.set({status: "Changed Value!"});
    }
});