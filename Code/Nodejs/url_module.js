var http = require('http');
var url = require('url');
var fs = require('fs');
var URL = require('url').URL;


http.createServer(function (req, res) {
    var baseURL = 'http://' + req.headers.host + '/';
  var q = new URL(req.url,baseURL);
  var filename = "." + q.pathname;
  console.log(filename, baseURL)
//   path theo path cmd
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);