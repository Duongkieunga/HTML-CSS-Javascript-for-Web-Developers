// npm - node package manager. chứa các module không có sẵn trong hệ thống do đó cần phải cài để dùng 
/**
 * npm init 
 * npm install <name module> --save // de no luu lai modul nay trong file package.json
 * ls
 * ls node_modules/
 * ls node_modules/readline-sync
 */
var readlineSync = require('readline-sync');

var pet = {};
var weight = readlineSync.question("Weight?: ")
pet.weight = parseFloat(weight)
console.log(pet)
var username = readlineSync.question('May I have your name? ');
console.log('Hi ' +username + '!' );