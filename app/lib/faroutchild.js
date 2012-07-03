var bus = require('servicebus').bus();

bus.subscribe('signal', function () {
  console.log('message received!');
  var start = new Date(),
      rand = Math.floor(Math.random() * 10);
  setTimeout(function () {
    bus.publish('response', { message: 'procesing completed in ' + rand + ' seconds'});
  }, rand * 1000);
});
