var http = require('http');
var url = require('url');
var fs = require('fs');

function sleep(milliSeconds) {
  var startTime = new Date().getTime();
  while (new Date().getTime() < startTime + milliSeconds);
}

function route(pathname, response) {
  console.log('About to route a request for ' + pathname);
  var suffix = pathname.substring(pathname.length - 4, pathname.length);

  if (suffix == 'html') {
    /* Now we can insert the code to read a file and write it to the
     * response message. Note that we use readFile rather than
     * readFileSync */
    fs.readFile('.' + pathname, 'utf8', function(err, contents) {
      //sleep(10000);
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });

  } else {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Not asking for an html file');
    response.end();
  }
}

function onRequest(request, response) {
  var pathname = url.parse(request.url).pathname;
  console.log('Request for ' + pathname + ' received');

  route(pathname, response);
}

http.createServer(onRequest).listen(4001);
console.log('Server has started.');
