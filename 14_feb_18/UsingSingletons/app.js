var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'homeController'
        })

        .when('/about/', {
            templateUrl: 'pages/aboutUs.html',
            controller: 'aboutUsController'
        })

        .when('/about/:par1', {
            templateUrl: 'pages/aboutUs.html',
            controller: 'aboutUsController'
        })

});

myApp.controller('homeController', ['$scope','$log', function($scope,$log) {

    $scope.name = 'Home';
    $log.main = 'Property of homeController';
    $log.log("log from homeController = ");
    $log.log($log);

    $log.log("scope from homeController = ");
    $log.log($scope);

}]);

myApp.controller('aboutUsController', ['$scope','$routeParams','$log', function($scope,$routeParams,$log) {


    $scope.name = 'About Us ';
    $scope.par1 = $routeParams.par1 || 'Oops No Query String Parameters Passed.....'
    $log.main1 = "Property of About Us Controller"
    $log.log("log from aboutUsController = ");
    $log.log($log);
    $log.log("scope from aboutUsController = ");
    $log.log($scope);
}]);
