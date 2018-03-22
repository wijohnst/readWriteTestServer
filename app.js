const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

var path = require("path");
var fs = require("fs");
var checkMimeType = true;
var nodemon = require('nodemon');
var express = require('express');
var lint = require('eslint');
var csv = require('csv');

var app = express();

console.log("Starting web server @ " + hostname + ":" + port);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
	
});

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});
app.listen(3000);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});





