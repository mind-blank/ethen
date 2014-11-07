var express = require('express'),
  server;

var app = express();

app.use('/public', express.static(__dirname + '/public'));
app.set('view engine', 'jade');

app.get('/', function(req, res) {
  res.render(__dirname + '/views/index.jade');
});

server = app.listen(3000);

exports.stop = function(done) {
  server.close(done);
};
