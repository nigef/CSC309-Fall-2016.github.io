'use strict';

const http = require('http');
const url = require('url');
const fs = require('fs');
const querystring = require('querystring');

function onRequest(request, response) {
  let pathname = url.parse(request.url).pathname;
  console.log('Request for ' + pathname + ' received');

  if (pathname == '/index.html') {
    fs.readFile('.' + pathname, 'utf8', function(err, contents) {
       response.writeHead(200, { 'Content-Type': 'text/html' });
       response.write(contents);
       response.end();
    });
  } else if (pathname == '/example.js') {
    fs.readFile('.' + pathname, 'utf8', function(err, contents) {
      response.writeHead(200, { 'Content-Type': 'application/javascript' });
      response.write(contents);
      response.end();
    });
  } else if (pathname == '/getHint') {
    let query = url.parse(request.url).query;
    console.log('query = ' + querystring.parse(query).q);
    console.log('here');

    let substr = querystring.parse(query).q;
    fs.readFile('./names.json', 'utf8', function(err, data) {
      let result = [];
      let names = JSON.parse(data).items;
      //console.log(names)
      for (let i = 0; i < names.length; i++) {
        let name = names[i].toLowerCase();
        if (name.startsWith(substr.toLowerCase())) {
          result.push(names[i]);
        }
      }
      console.log(result);

      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.write(JSON.stringify(result))
      response.end();
    });
  }
}

http.createServer(onRequest).listen(4001);
console.log('Server has started.');
