var express = require('express'),
  server;

var app = express();

app.use('/public', express.static(__dirname + '/public'));
app.set('view engine', 'jade');

app.get('/', function(req, res) {
  res.render(__dirname + '/views/index.jade');
});

var start = exports.start = function(port, address) {
  server = app.listen(port, address);
};

var stop  = exports.stop = function(done) {
  server.close(done);
};

if(require.main === module){ 
  start(3000);
  process.on('SIGTERM', stop);
  process.on('SIGINT', stop);
}
