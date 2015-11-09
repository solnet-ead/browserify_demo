var unique = require('uniq');
var url = require('url');

var data = [1, 2, 3, 3, 4, 5, 5, 6, 7, 7, 7];

console.log(unique(data));

document.body.innerHTML = JSON.stringify(url.parse(window.location.href));