chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  window.console.log(changeInfo.status);
  if (changeInfo.status === 'complete') {
    //alert(tab.url);
    alert(document.title);
  }
});
