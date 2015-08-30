// Dummy login factory and controller by J.V. //

myApp.factory('memberFactory', function ($http) {
	var factory = {};

	factory.memberList = [
		{
			firstName: "Lorem", 
			lastName: "Ipsum", 			
			email: "lorem@ipsum.com",
			username: "l_ipsum",
			password: "123456"
		}, 

		{
			firstName: "admi", 
			lastName: "nistrator", 			
			email: "admin@codingdojo.org",
			username: "admin",
			password: "password"
		},

		{
			firstName: "Sarah", 
			lastName: "Palmer", 			
			email: "spalmer@link.org",
			username: "spalmer",
			password: "654321"
		}
	];

	return factory;
})

myApp.controller('memberController', function ($scope, $location, memberFactory) {

	var members = memberFactory.memberList	

	$scope.login = function () {		
		if ( !$scope.memberLogin || !$scope.memberLogin.username || !$scope.memberLogin.password ) {
			alert("Username and password fields cannot be blank.")
		} else {
			console.log("logging in with the following info:");
			console.log($scope.memberLogin);
			for ( i=0; i<members.length; i++ ) {
				if ($scope.memberLogin.username.match(members[i].username)) {
					console.log("user is in factory");
					if ( $scope.memberLogin.password.match(members[i].password) ) {
						console.log("password matches");
					} else {
						console.log("invalid username or password");
					}
				}
			}			
		}
	}

})

myApp.directive('myUserLogin', function() {
    var linkFn;
    linkFn = function($scope, element, attrs) {
        // var loggedIn = $scope.loggedIn

        var loginTag = angular.element(element.find("#dropdown-login"));
        var loginForm = angular.element(element.find("#login-form"));
        var loginButton = angular.element(element.find("#loginButton"));
        var loggedInUser = angular.element(element.find("#loggedInUser"));

        loggedInUser.hide();

        var hide = function() {
        	$(loginForm).hide("fast");
        }

        var show = function() {
        	$(this).show("fast");
        }

        loginButton.on("click", function() {
        	console.log("directive");
	        // if (loggedIn == true) {
            	console.log("logged in via directive");

            	loginForm.hide();
            	loginTag.hide();
            	loggedInUser.show();
            // }        	
        })
    };
    return {
        restrict: 'E',
        link: linkFn
    };
});

// End of J.V.'s dummy login and controler //