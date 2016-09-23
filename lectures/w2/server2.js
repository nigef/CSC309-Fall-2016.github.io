/* A very simple web application that will serve a web page read from the 
 * system.  Note that this is an illustrative example, and not how you would
 * write a real web application.  It is missing error checking and could be
 * better organized.

 * More importantly each request is handled sequentially, so a long processing
 * time for one request (simulated by a fake sleep fucntion) will block 
 * another request from making progress.
 */

var http = require("http");
var url = require("url");
var fs = require('fs');

function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
}



function route(pathname) {
    console.log("About to route a request for " + pathname);
    var suffix = pathname.substring(pathname.length-4, pathname.length);

    if (suffix == "html") {
        sleep(10000);
        var content =  fs.readFileSync("." + pathname, "utf8");
        return(content);
    } else {
        return("not asking for an html file");
    }
}

function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received");

    var data = route(pathname);

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(data);
    response.end();
}

http.createServer(onRequest).listen(4001);
console.log("Server has started.");
