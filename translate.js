const translate = require('@vitalets/google-translate-api');

var text = 'I am using google translator to convert this text to spanish'
console.log("English :>",text);
translate(text, {to: 'es'}).then(res => {
    console.log("Spanish :>",res.text);
}).catch(err => {
    console.error(err);
});