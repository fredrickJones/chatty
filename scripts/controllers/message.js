'use strict';
var app = angular.module('chattyApp')

app.controller('MessageCtrl', function($scope, MessageService) {
	// $scope.messages = [];
	$scope.getServerMessages = function() {
		MessageService.getMessages()
			.then(function(res) {
				$scope.message = res.data.message;
				console.log(res);
			});
	};

	$scope.getServerMessages();


	$scope.addMessage = function() {
	    MessageService.postMessage($scope.newMessage)
	    	.then(function(res) {
	    		console.log('this is the response', res);
	    		$scope.newMessage = res.data.message;
	    		$scope.getServerMessages();
	    	});
    	$scope.newMessage = '';
    };

});
