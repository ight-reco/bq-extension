global.browser = require('webextension-polyfill');
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  chrome.pageAction.show(tabId);
});

chrome.pageAction.onClicked.addListener(tab => {
  console.log('send');
  console.log(tab);
  chrome.tabs.sendMessage(tab.id, 'Replace', null);
});
