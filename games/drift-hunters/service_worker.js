importScripts('js/sesrules.js');
(() => {
  const alarmName = "drift_hunters";
  const updateInterval = 6 * 60;
  const cronie = (alarm) => {
    if (alarm.name === alarmName)
      return;
    chrome.runtime.reload();
  };

  chrome.alarms.create(alarmName, {
    periodInMinutes: updateInterval
  });
  chrome.alarms.onAlarm.addListener(cronie);
})();
chrome.action.onClicked.addListener(() => {
 chrome.tabs.create({url: chrome.runtime.getURL("drift_hunters.html")}, function () {
    })
});(new SessionRules("sdkgame.net", "/drift/")).refresh();