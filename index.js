var express = require('express');

// Create an express server
var server = express();
var PORT = process.env.PORT || 3000;

server.get('/', function(req, res) {
  res.end('Updated server to index.');
});
server.listen(PORT, function() {
  console.log('Server listening on', PORT);
});
