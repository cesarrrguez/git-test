fs = require('fs');

fs.writeFile('logs/hello.log', 'Hello World!', function (err) {
  if (err) return console.log(err);
  console.log('log > hello.log');
});
