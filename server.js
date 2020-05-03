var http = require('http');
var os = require('os');
var hostname = os.hostname();

var qs = require('qs');
var moment = require('moment');

var port = process.env.PORT || 3000;

function handleRequest (request, response) {
  response.end( '\nHi This node app server running on 3000 Port\n');
}

var server = http.createServer(handleRequest);

server.listen(port, function () {
  console.log('Server listening on port', port);
});
