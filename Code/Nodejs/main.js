// require directive to load the http module and store the returned HTTP instance into an http variable
var http = require("http");
// path theo file hien tai
var dt = require("./myfirstmodule");
// Import events module
var events = require('events')
var fs = require('fs');
var url = require('url');


// created http instance
// request argument that represents the request from the client, as an object (http.IncomingMessage object).
http.createServer(function (request, response) {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    // response.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the response body as "Hello World"
    // response.end("Hello World\n");
    //write a response to the client
    // response.write("The date and time are currently: " + dt.myDateTime()); 
    //end the response
    // response.end();

    fs.readFile('demofile1.html', function(err, data) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        return response.end();
    });

    // Create a new file using the appendFile() method:
    // Append "Hello content!" to the end of the file "mynewfile1.txt":
    fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
      });

    // The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. 
    // If the file does not exist, an empty file is created:
      fs.open('mynewfile2.txt', 'w', function (err, file) {
        if (err) throw err;
        console.log('Saved!');
      });
    // The fs.writeFile() method replaces the specified file and content if it exists. 
    // If the file does not exist, a new file, containing the specified content, will be created:
      fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
    
    // fs.unlink() method deletes the specified file
    fs.unlink('mynewfile2.txt', function (err) {
        if (err) throw err;
        console.log('File deleted!');
      });
    
    // fs.rename() method renames the specified file:
    fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
        if (err) throw err;
        console.log('File Renamed!');
      });
    //  waits for a request over 8081 port on the local machine.
//the server object listens on port 8080 
}).listen(8081);
 
 // Console will print the message
 console.log('Server running at http://127.0.0.1:8081/');