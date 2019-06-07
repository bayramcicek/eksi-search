var menuItem = {
    "id": "eksi",
    "title": "search on Ekşi Sözlük",
    "contexts": ["selection"]
};

try{
	chrome.contextMenus.create(menuItem);
}catch(e){
	
}


function fixedEncodeURI (str) {
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}

chrome.contextMenus.onClicked.addListener(function(clickData){   
    if (clickData.menuItemId === "eksi" && clickData.selectionText){    
        var wikiUrl = "https://eksisozluk.com/" + fixedEncodeURI(clickData.selectionText);              
        chrome.tabs.create({url: wikiUrl});        
    }
});