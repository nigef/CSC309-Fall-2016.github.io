/* First attempt to fix the problem of one request preventing another
 * from making progess.  This approach just shifts the creation of the response
 * message from the onRequest function to the route function.  It doesn't
 * change the fact that the process still needs to complete one request
 * sequentially, before processing the next request.
 */

var http = require("http");
var url = require("url");
var fs = require('fs');

function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
}

function route(pathname, response) {
    console.log("About to route a request for " + pathname);
    var suffix = pathname.substring(pathname.length-4, pathname.length);

    if (suffix == "html") {
        sleep(10000);
        var content =  fs.readFileSync("." + pathname, "utf8");
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(content);
        response.end();
    } else {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Not asking for an html file");
        response.end();
    }
}

function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received");

    route(pathname, response);

}

http.createServer(onRequest).listen(4001);
console.log("Server has started.");
