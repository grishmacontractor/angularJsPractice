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

myApp.controller('homeController', ['$scope', function($scope) {
    

    $scope.name = 'Home';
}]);

myApp.controller('aboutUsController', ['$scope','$routeParams', function($scope,$routeParams) {


    $scope.name = 'About Us ';
    $scope.par1 = $routeParams.par1 || 'Oops No Query String Parameters Passed.....'
}]);
