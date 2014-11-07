var $ = require('jquery-browserify');
var Client = require('./client.js');
var client = new Client();
var idCount = 0;

$(window).on('load', function() {
  $('#mine').on('click', function() {
    client.setMining(true);
  });

  client.connect(function() {
    client.network.peers(function(p) {
      console.log(p);
    });

    client.network.on('connect', function() {
      console.log('connection');
    });

    client.network.on('message.hello', function(hello, peer) {
      console.log('peer');
    });

  });
});
