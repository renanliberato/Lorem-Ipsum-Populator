chrome.contextMenus.create({
    "contexts": ['all'],
    "title": "Populate with Lorem",
    "onclick": function(info, tab){
        chrome.tabs.sendRequest(tab.id, 'populate')
    }
})
