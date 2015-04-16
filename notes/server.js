// Get ip address on linux: ifconfig
// Use homebrew to install and tinker with stuff
// To install MongoDB and Node.js


// This is an ugly example at low-level... we want easier....
var http = require("http");
var url = require("url");

http.createServer(function (request, response) {
	var pathname = url.parse(request.url).pathname;
	var query = url.parse(request.url).query;
	response.writeHead(200, {"Content-Type": "text/plain"});
	// do other stuff here for writing content
	response.end();
}).listen(8080); // request specific port number

// vs...

// Procfile for Heroku app
// Heroku create

// We need a bill of materials in package.json
// then use npm install
// google npm for epic package suite
// only need to install if you have new dependencies
// then node app.js
// then you've won the game
// this was probably your same problem with bootstrap

// include express framework
var express = require('express')
// create new app
var app = express();

// app.[HTTP VERB] ([PATH / URL], function (request, response) {
//		// request is an object
//		// response is an object
//		// Stuff in here: what to do when path is triggered
// });
// [HTTP VERB] = GET | POST

app.get('/', function (request, response) {
	response.send("Sup Globe");
});

app.get('/pikachu', function (request, response) {
	response.send("Poor Pokemon Choice :/");
});

// create server that responds to specific port number
app.listen(8080);