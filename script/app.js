var myApp = angular.module('myApp', ['ngRoute']);

//routes
myApp.config(function ($routeProvider){

    $routeProvider
    .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'mainController'
    })
    .when('/team', {
        templateUrl: 'partials/team.html',
        contoller: 'teamController'
    });

});