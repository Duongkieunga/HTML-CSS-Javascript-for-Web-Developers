var fs = require('fs');
var readlineSync = require('readline-sync');

console.log('Start');

// Sync
var txt1 = fs.readFileSync('song.txt', {encoding:'utf8'})
// ham Sync doi txt1 doc xong moi doc txt2
console.log(txt1);
var txt2 = fs.readFileSync('song-1.txt', {encoding:'utf8'})
console.log(txt2);

console.log('Log');
console.log('-----------------------------------');
// Async
console.log('Start');

var txt1 = fs.readFile('song.txt', {encoding:'utf8'})
// ham Sync doi txt1 doc xong moi doc txt2
console.log(txt1);
var txt2 = fs.readFile('song-1.txt', {encoding:'utf8'})
console.log(txt2);

console.log('Log');
var axios = require('axios');

async function download(){
    var res1 = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(function (response) {
    // handle success
    console.log("https://jsonplaceholder.typicode.com/todos/1");
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
 
  var res2 = await axios.get('https://jsonplaceholder.typicode.com/todos/2')
  .then(function (response) {
    // handle success
    console.log("https://jsonplaceholder.typicode.com/todos/2");
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
 
}
download()
var rp = require('request-promise');

var request = require('request');
function load(url){
    return rp(url);
  }
load('https://jsonplaceholder.typicode.com/todos/1').then(function(body) {
       console.log('Done', body);
     });