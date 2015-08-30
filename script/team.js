myApp.factory('teamFactory', function (){
	factory = {}
	// chatlog = [{name:, content:, comments: }];
	// factory.teamChat = function() {

	// } 

	factory.teams = [
		{
			teamName: "Team Austin", 
			city: "Austin", 
			state: "TX",
			memberCount: "16",
			currentEventGoal: "$2000",
			progressTowardsCurrentGoal: "$560",
			totalRaised: "$10,200",
			rescuesFunded: "5"
		},

		{
			teamName: "Leigh High School", 
			city: "San Jose", 
			state: "CA",
			memberCount: "8",
			currentEventGoal: "$1000",
			progressTowardsCurrentGoal: "$80",
			totalRaised: "$600",
			rescuesFunded: "1"
		},

		{
			teamName: "Coding Dojo", 
			city: "San Jose", 
			state: "CA",
			memberCount: "5",
			currentEventGoal: "$1000",
			progressTowardsCurrentGoal: "$280",
			totalRaised: "$280",
			rescuesFunded: "0"
		},

		{
			teamName: "San Jose State University", 
			city: "San Jose", 
			state: "CA",
			memberCount: "9",
			currentEventGoal: "$2000",
			progressTowardsCurrentGoal: "$100",
			totalRaised: "$3,200",
			rescuesFunded: "2"
		}, 

		{
			teamName: "Stanford University", 
			city: "Stanford", 
			state: "CA",
			memberCount: "8",
			currentEventGoal: "$3000",
			progressTowardsCurrentGoal: "$2000",
			totalRaised: "$5,200",
			rescuesFunded: "3"
		}
	]

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