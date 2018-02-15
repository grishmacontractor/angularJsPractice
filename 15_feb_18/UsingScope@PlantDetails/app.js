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

    $scope.plant = {
        name: 'Tulsi',
        price: '400Rs'
    }

}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    
    
}]);
myApp.directive("usePanel", function () {
    return{
        restrict: 'AECM',
        templateUrl: 'directives/usePanel.html',
        replace: true,
        scope: {
            plantName: "@",
            plantPrice: "@"
        }
    }
})