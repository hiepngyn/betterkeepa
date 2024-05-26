document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.local.get(['status'], function(result) {
        if (result.status) {
            document.getElementById("status").innerText = result.status;
        }
    });
});