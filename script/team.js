myApp.factory('teamFactory', function (){
	factory = {}
	messageboard = [{name:"Jae Hong is FAbulous", title:"Hello. This is a content from the factory.", date: new Date(), post:"Objects of this message came from the factory, but you can hook up your backend and database easily to create a wonderful messageboard/bulletinboard!"}];
	member = [{name: "Jason Jones" , image: "student1.png"},
	{name: "Roy Hugh" , image: "student2.jpg"},
	{name: "Jessica Palmer" , image: "student 4.jpg"},
	{name: "Lory Park" , image: "student 5.jpg"}

	]
	activities = [
	{activity: "Fundraiser", image: "assets/activity1.jpg"},
   	{activity: "Group Photo Session", image: "assets/activity2.jpg"}
	]
	factory.teamChat = function(callback) {
		callback(messageboard);
	} 
	factory.addChat = function(message){
		messageboard.push(message);
	}

	factory.teamPics = function(callback){
		callback(member);
	}

	factory.activityPics = function(callback){
		callback(activities);
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
	teamPics();
	function teamPics(){
		teamFactory.teamPics(function(data){
			$scope.teampics = data;

		})
	}

	activityPics();
	function activityPics(){
		teamFactory.activityPics(function(data){
			$scope.activitypics = data;
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