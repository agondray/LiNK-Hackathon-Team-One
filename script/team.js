myApp.factory('teamFactory', function (){
	factory = {}
	messageboard = [{name:"Rod", title:"Hello?", date: new Date(), post:"New Content"}];
	factory.teamChat = function(callback) {
		callback(messageboard);
	} 
	factory.addChat = function(message){
		messageboard.push(message);
	}
	return factory;
});

myApp.controller('teamController', function ($scope, teamFactory){
	messageboard();
	function messageboard() {
		console.log("dog");
		teamFactory.teamChat(function(data){
			$scope.messages = data;
			console.log($scope);
		})
	}
	console.log("Woof");
	$scope.addMessage = function() {
		var newdate = new Date();
		console.log(newdate);
		postdata = {
			name: $scope.post.name,
			title: $scope.post.title,
			date: newdate,
			post: $scope.post.post
		}
		teamFactory.addChat(postdata);

	}
});