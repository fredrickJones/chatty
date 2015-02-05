'use strict';
var http = require('http');
var port = 8910;

var messages = ['Jonny help me'];

var chatRequest = function(req, res) {
	switch (req.method) {
		case 'GET':
			res.writeHead(200, {
				'Connection': 'close',
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			});
			res.end(JSON.stringify({message: messages}));
			break;
		case 'POST':
			var postData = '';
			req.on('data', function(chunk) {
				postData += chunk.toString();
			});
			req.on('end', function() {
				console.log('got POST');
				console.log(JSON.parse(postData));
				messages.push(JSON.parse(postData));
				res.writeHead(200, {
					'Connection': 'close',
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*'
				});
			});
			res.end(postData);
			break;
	};
};

http.createServer(chatRequest).listen(port);
console.log('listening on port ' + port);