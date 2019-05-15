chrome.browserAction.onClicked.addListener(function (activeTab) {
    var newURL = "https://www.pivotalweather.com/model.php";
    chrome.tabs.create({
        url: newURL
    });
});