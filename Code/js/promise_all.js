// dung de thu gon code
var fs = require('fs');

function readFilePromise(path){
    return new Promise(function(resolve, reject){
        fs.readFile(path, {encoding:"utf8"}, function(err, data){
            if (err){
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

// readFilePromise('./song1.txt').then(function(song1){
//     console.log(song1);
//     return readFilePromise('./song2.txt');
// }).then(function(song2){
//     console.log(song2);
// });

Promise.all([
    readFilePromise('./song.txt'),
    readFilePromise('./song1.txt'),
    readFilePromise('./song4.txt')
]).then(function(values){
    console.log(values);
    // tra ve mot mang cac gia tri
}).catch(function(err){
    console.log(err);
})


var co = require('co');
co(function*(){
    // var song1 = yield readFilePromise('./song.txt');
    // var song2 = yield readFilePromise('./song1.txt');
    // var song3 = yield readFilePromise('./song2.txt');
    // return [song1, song2, song3];
    var values = yield [
        readFilePromise('./song.txt'),
        readFilePromise('./song1.txt'),
        readFilePromise('./song2.txt')
    ];
    return values;
}).then(function(values){
    console.log(values);
}).catch(function(error){
    console.log(error)
})

var readFiles = co.wrap(function*(files){ // co.wrap tra ve mot ham
    // string -> Promise
    var values = yield files.map(function(file){
        return readFilePromise(file);
    })
});

readFiles(['song1.txt','song2.txt','song.txt'])
.then(function(values){
    console.log(values)
})