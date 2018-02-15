var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    
    
}]);
myApp.directive("usePanel", function () {
    return{
        restrict: 'AECM',
        template: '<section><div class="panel panel-primary">primary...</div><div class="panel panel-success">success...</div><div class="panel panel-danger">danger...</div></section>',
        //template: '<div><div class="panel panel-primary">primary...</div><div class="panel panel-primary">primary...</div></div>',
        replace: true
    }
})