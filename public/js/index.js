var $ = require('jquery-browserify');
var Client = require('ethereumjs-rpc');
var client = new Client();

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
