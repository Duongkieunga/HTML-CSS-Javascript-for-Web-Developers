// file system.(fs)
var fs = require('fs');

var text = fs.readFileSync('./song.txt', {encoding:'utf8'});
console.log(text);
fs.writeFileSync('./song-1.txt','I am Coders.Tokyo');

var path  = require('path');

function getExtension(fileName) {
  // your code here!
  return path.extname(fileName)
}