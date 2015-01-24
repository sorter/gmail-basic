chrome.webNavigation.onBeforeNavigate.addListener(function(reqData) {

    var gmailUrl = 'https://mail.google.com/mail/u/0/';
    var basicGmailUrl = 'https://mail.google.com/mail/u/0/h/';
    if (reqData.url.indexOf(gmailUrl) === 0
        && reqData.url.indexOf(basicGmailUrl) === -1) {
        chrome.tabs.update(reqData.tabId, { url: basicGmailUrl });
    }

});
