var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'homeController'
        })

        .when('/about', {
            templateUrl: 'pages/aboutUs.html',
            controller: 'aboutUsController'
        })

});

myApp.controller('homeController', ['$scope', function($scope) {
    

    $scope.name = 'Home';
}]);

myApp.controller('aboutUsController', ['$scope', function($scope) {


    $scope.name = 'About Us ';
}]);
