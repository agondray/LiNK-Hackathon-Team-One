// Dummy login factory and controller by J.V. //

describe("Unit testing jquery directive", function() {
      var $compile, $scope, element;
      $scope = element = $compile = void 0;

      // Load the module, which contains the directive
      beforeEach(module("jqueryDirectives"));

      // Store references to $rootScope and $compile so they are available to all tests in this describe block
      beforeEach(inject(function(_$compile_, _$rootScope_) {

        // The injector unwraps the underscores (_) from around the parameter names when matching
        $scope = _$rootScope_;
        return $compile = _$compile_;

      }));

      it("should slide Down a block", function() {

        // Create html fragment
        element = angular.element('<div class="form" data-my-slide="showForm">Text</div>');

        // Set variable
        $scope.showForm = true;

        // Compile a piece of HTML containing the directive
        $compile(element)($scope);
        $scope.$digest();

        // Set expectation
        return expect(element.css('height')).toBe('1px');
      });

      it("should slide Up a block", function() {

        // Create html fragment
        element = angular.element('<div class="form" data-my-slide="showForm">Text</div>');

        // Set variable
        $scope.showForm = false;

        // Compile a piece of HTML containing the directive
        $compile(element)($scope);
        $scope.$digest();

        // Set expectation
        return expect(element.css('height')).toBe('0px');
      });

    });

// Here we create a module to group these directives jquery related
    var jqueryDirectives = angular.module("jqueryDirectives", []);

    // Here we add a directive to the module. camelCase naming in this file (mySlide) and dash separated in html (my-Slide)
    jqueryDirectives.directive("userLoggedIn", [
      function() {
        return {

          // This means the directive can be used as an attribute only. Example <div data-my-slide="variable"> </div>
          restrict: "A",

          // This is the functions that gets executed after Angular has compiled the html
          link: function(scope, element, attrs) {

            // We dont want to abuse on watch but here it is critical to determine if the parameter has changed.
            scope.$watch(attrs.mySlide, function(newValue, oldValue) {

              // This is our logic. If parameter is true slideDown otherwise slideUp.
              // TODO: This should be transformed into css transition or angular animator if IE family supports it
              if (newValue) {
                return element.slideDown();
              } else {
                return element.slideUp();
              }
            });

            if ($scope.loggedIn == true) {
            	loginForm.hide();
            	loggedinUser.show();
            }
          }
        };
      }
    ]);



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

	$scope.loggedIn = false;

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
						$scope.loggedIn = true;
					} else {
						console.log("invalid username or password");
					}
				}
			}			
		}
	}

})

// End of J.V.'s dummy login and controler //