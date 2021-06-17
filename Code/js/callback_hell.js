var fs = require('fs');

// Callback hell
fs.readFileSync('./song.txt',{encoding:'utf8'}, function(err, song1){
    console.log(song1);
    fs.readFileSync('./song1.txt',{encoding:'utf8'}, function(err, song2){
        console.log(song2)
    })
})

// Sync
var song1 = fs.readFileSync('./song2.txt',{encoding:'utf8'});
var song2 = fs.readFileSync('./song2.txt',{encoding:'utf8'});