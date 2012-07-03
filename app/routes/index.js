var bus = require('servicebus').bus(),
    util = require('util');
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

var messages = [];

exports.forkit = function (req, res) {
  var cp = require('child_process');
  var n = cp.fork(__dirname + '/../lib/child.js');
  n.on('message', function(m) {
    console.log('received message: ' + util.inspect(m));
    messages.push(m.message);
  });
  res.render('forkit', { title: 'Forkit', messages: messages });
}

bus.subscribe('response', function(m) {
  console.log('response received: ' + util.inspect(m));
  messages.push(m.data.message);
});

exports.farout = function (req, res) {
  bus.publish('signal', {});  
  res.render('forkit', { title: 'Forkit', messages: messages });
}