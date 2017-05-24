chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "http://spooky.co.nf/";
  chrome.tabs.create({ url: newURL });
});
