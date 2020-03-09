async function registerContentScript() {
    return browser.contentScripts.register({
        js: [{file: "content/spoof-navigator.js"}],
        matches: ["<all_urls>"],
        allFrames: true,
        runAt: "document_start",
        matchAboutBlank: true
    });
}

registerContentScript();
