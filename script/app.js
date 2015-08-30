var myApp = angular.module('myApp', ['ngRoute']);
//routes
myApp.config(function ($routeProvider){

    $routeProvider
    .when('/', {
        templateUrl: 'partials/main.html'
    })
    .when('/team', {
        templateUrl: 'partials/team.html'
    })
    .otherwise({redirectTo:'/'});

});