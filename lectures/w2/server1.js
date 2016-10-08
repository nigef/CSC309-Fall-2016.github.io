/* A very simple web application. Run as "node server1" */

var http = require('http');

function onRequest(request, response) {
  console.log(request.url);
  //console.log(request.headers);

  /* Construct and write the repsonse message on the TCP socket */
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write('Hello CSC309');
  response.end();
}

/* Set up the TCP socket, bind the socket to port 4001, and start an
 * event loop that calls onRequest every time an HTTP request arrives */
http.createServer(onRequest).listen(4001);
