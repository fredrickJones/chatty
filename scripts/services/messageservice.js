'use strict';
var app = angular.module('chattyApp');
 
app.service('MessageService', function($http) {
	this.getMessages = function() {
		return $http.get('http://localhost:8910');
	};

	this.postMessage = function(chat) {
		return $http.post('http://localhost:8910', {message: chat, createdAt: (new Date()).toLocaleString()});
	};


});
