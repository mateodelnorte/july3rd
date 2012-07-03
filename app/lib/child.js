var start = new Date(),
    rand = Math.floor(Math.random() * 10);

setTimeout(function () {
  process.send({ message: 'procesing completed in ' + rand + ' seconds'});
  process.nextTick(function () {
    process.kill(process.pid);
  });
}, rand * 1000);