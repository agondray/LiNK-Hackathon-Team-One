myApp.factory('teamFactory', function (){
	factory = {}
	messageboard = [{name:"Rod", title:"Upcoming Activity", date: new Date(), post:"The upcoming event should be great!"}];
	factory.teamChat = function(callback) {
		callback(messageboard);
	}; 
	factory.addChat = function(message){
		messageboard.push(message);
	};
	return factory;
});

myApp.controller('teamController', function ($scope, teamFactory){
	$scope.load = function (){
		$('#submitMessage').click(function (){
        	$('#messageConfirm').show('slow', 'linear', function (){
        			setTimeout(function (){
        				$('#messageConfirm').fadeOut('slow');
        			}, 2000);
        		});
   			});
		};

	$scope.load();

	messageboard();
	function messageboard() {
		teamFactory.teamChat(function(data){
			$scope.messages = data;
		});
	}

	$scope.addMessage = function() {
		var newdate = new Date();
		postdata = {
			name: $scope.post.name,
			title: $scope.post.title,
			date: newdate,
			post: $scope.post.post
		}
		teamFactory.addChat(postdata);
		$scope.post = ' ';

	}

});