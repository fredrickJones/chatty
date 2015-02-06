'use strict';
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 8910;

app.listen(port);

var messages = [];

app.use(bodyParser.json());

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.get('/', function(req, res) {
	res.send(JSON.stringify({message: messages}));
});

app.post('/', function(req, res) {
	req.body.createdAt = new Date();
	messages.push(req.body);
	res.send(JSON.stringify(messages));
});


// var http = require('http');
// var port = 8910;

// var messages = [];

// var chatRequest = function(req, res) {
// 	switch (req.method) {
// 		case 'GET':
// 			res.writeHead(200, {
// 				'Connection': 'close',
// 				'Content-Type': 'application/json',
// 				'Access-Control-Allow-Origin': '*'
// 			});
// 			res.end(JSON.stringify({message: messages}));
// 			break;
// 		case 'POST':
// 			res.writeHead(200, {
// 				'Connection': 'close',
// 				'Content-Type': 'application/json',
// 				'Access-Control-Allow-Origin': '*'
// 			})
// 			var postData = '';
// 			req.on('data', function(chunk) {
// 				postData += chunk.toString();
// 			});
// 			req.on('end', function() {
// 				console.log('got POST');
// 				console.log(JSON.parse(postData));
// 				var temp = JSON.parse(postData);
// 				messages.push({text: temp.message, createdAt: temp.createdAt});
// 				res.end(JSON.stringify({message: messages}));
// 			});
// 			break;
// 		case 'OPTIONS':
// 			res.writeHead(200, {
// 				'Connection': 'close',
// 				'Content-Type': 'application/json',
// 				'Access-Control-Allow-Origin': '*',
// 				'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
// 				'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
// 			});
// 			res.end(JSON.stringify({message: messages}));
// 			break;
// 		default:
// 			break;
// 	};
// };

// http.createServer(chatRequest).listen(port);
// console.log('listening on port ' + port);