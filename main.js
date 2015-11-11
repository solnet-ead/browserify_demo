var unique = require('uniq');
var url = require('url');
var colors = require('colors');
var os = require('os');
var buffer = require('buffer');

var data = [16, 1, 2, 3, 3, 4, 5, 5, 6, 7, 7, 7, 9, 9, 11, 12, 14, 15, 15];
unique(data);
data.sort(function(a,b){
	return a - b;
});

console.log(data);

//document.body.innerHTML = JSON.stringify(url.parse(window.location.href));

/*stringOne = 'This is a plain string.',
stringTwo = 'This string is red.'.red,
stringThree = 'This string is blue.'.blue;

 console.log(stringOne.green);
 console.log(stringOne.yellow);

 console.log(stringTwo);
 console.log(stringThree);

 console.log(stringTwo.magenta);
 console.log(stringThree.grey.bold);*/

 //console.log(os.type());
