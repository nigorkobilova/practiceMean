console.log('app/routes loaded');
var app = angular.module('app', ['ngRoute']);


app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/main.html',
            controller: 'questionController',
        })
        .when('/newQuestion', {
            templateUrl: 'partials/newQuestion.html',
            controller: 'questionController',
        })
        .when('/question/:id', {
            templateUrl: 'partials/show.html',
            controller: 'questionController'
        })
        .when('/question/:id/newAnswer', {
            templateUrl: 'partials/newAnswer.html',
            controller: 'answerController'
        })
        .otherwise('/')
});
