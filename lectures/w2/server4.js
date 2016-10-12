/* This is a solution to the blocking problem, but because a file read is
 * a relatively quick operation, I've inserted a very long operation.
 *
 * The solution is to make an asynchronous call and set up a callback function
 * that will be called when the asynchronous call completes.
 */

var http = require('http');
var url = require('url');
var fs = require('fs');
var exec = require('child_process').exec;

function route(pathname, response) {
  console.log('About to route a request for ' + pathname);
  var suffix = pathname.substring(pathname.length-4, pathname.length);

  if (suffix == 'html') {
    /* We want a long running operation to illustrate that
     * the approach of calling a function with a callback will
     * solve the blocking problem.  In this case we are using exec,
     * which will create a process, and the output of that process
     * will be stored in stdout.
     * After exec starts up the child preocess, it returns and the event
     * loop will call the callback function.
     */
    exec('find /', { timeout: 10000, maxBuffer: 20000 * 1024 },
      function callback (error, stdout, stderr) {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.write(stdout);
        response.end();
      });

    // var content = fs.readFileSync('.' + pathname, 'utf8');
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
