Ajax examples:

There are two simple examples of using Ajax in this directory:

Load a file asynchronously: 
--------------------------
    - file_load.html - written in plain JavaScript
    - file_load2.html - rewritten using JQuery

To make sure that both the original http request and the ajax call follow 
the same origin policy, you need to load the files via a web browser using the 
HTTP protocol.

One simple way to do this is to install the http-server (https://www.npmjs.com/package/http-server).  If you start the http-server in the current working
directory, you can load the files as "http://127.0.0.1:8081/file_load.html"
(Check the port number when http-server starts up.)

Search suggestions:
-------------------
When a user types characters into an input text field, the text in the 
input field is sent to the server.  The server sends back all the words
that start with this substring.

Files:
	- client - index.html, example.js
	- suggest_server.js
	-
Run the server as "node suggest_server".  Use your browser to navigate to 
"http://127.0.0.1:4001/index.html"
