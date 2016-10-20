
function getPageDetails(callback) { 
    chrome.tabs.executeScript(null, { file: '/js/getPageDetail.js' }); 
    
    chrome.runtime.onMessage.addListener(function(message)  { 
        
        callback(message); 
    }); 
}; 
