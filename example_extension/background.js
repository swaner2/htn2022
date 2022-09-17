chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "testAlarm") {
        //our alarm is running, send notification
    }
});
