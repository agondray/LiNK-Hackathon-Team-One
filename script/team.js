myApp.factory('teamFactory', [function (){
	factory = {}
	messageboard = [{poster:"Rod", title:"Hello?", post:"New Content"}];
	factory.teamChat = function(callback) {
		callback(messageboard);
	} 
	factory.addChat = function(message){
		messageboard.push(message);
	}
	return factory;
}]);

myApp.controller('teamController', ['$scope', 'teamFactory', function ($scope, teamFactory){
	messageboard();
	function messageboard() {
		teamFactory.teamChat(function(data){
			$scope.messages = data;
		})
	}

	$scope.addmessage = function() {
		teamFactory
	}
}]);