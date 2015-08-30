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
    .when('/team-sjsu', {
        templateUrl: 'partials/team-sjsu.html'
    })
    .when('/team-codingDojo', {
        templateUrl: 'partials/team-codingDojo.html'
    })
    .when('/team-stanford', {
        templateUrl: 'partials/team-stanford.html'
    })
    .when('/team-leighhs', {
        templateUrl: 'partials/team-leighhs.html'
    })
    .otherwise({redirectTo:'/'});

});