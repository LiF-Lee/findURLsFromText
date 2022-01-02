const Domains = require('./domainList.json');

function findURLsFromText(text)
{    
    const URLs = new Array();
    const urlRegex = new RegExp('(?:(?:https?):\/\/|www\.)(?:\([-\\w가-힣+&@#\/%=~_|$?!:,.]*\)|[-\\w가-힣+&@#\/%=~_|$?!:,.])*(?:\([-\\w가-힣+&@#\/%=~_|$?!:,.]*\)|[\\w가-힣+&@#\/%=~_|$])', 'igm');
    
    text = text.replace(urlRegex, function(URL) {
        URLs.push(URL.startsWith('https://') || URL.startsWith('http://') ? URL : `http://${URL}`);
        return '';
    });
    
    Domains.list.some(function(domain) {
        const matchRegex = new RegExp(`[-\\w가-힣+&@#\/%=~_|$?!:,.]+${domain}(:(0|6[0-5][0-5][0-3][0-5]|[1-5][0-9][0-9][0-9][0-9]|[1-9][0-9]{0,3}))?\\b`, 'g');
        if (text.includes(domain))
        {
            text = text.replace(matchRegex, function(URL) {
                URLs.push(`http://${URL}`);
                return '';
            });
        }
    });

    return URLs;
}
