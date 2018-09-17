var http = require('http');
var requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World?\n');
}

var server = http.createServer(requestListener);
console.log("hola, mi amigo")
server.listen(8080);