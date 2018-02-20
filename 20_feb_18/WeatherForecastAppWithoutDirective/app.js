// MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// ROUTES
weatherApp.config(function ($routeProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'pages/home.htm',
            controller: 'homeController'
        })

        .when('/forecast', {
            templateUrl: 'pages/forecast.htm',
            controller: 'forecastController'
        })

        .when('/forecast/:days', {
            templateUrl: 'pages/forecast.htm',
            controller: 'forecastController'
        })

});

// SERVICES
weatherApp.service('cityService', function() {

    this.city = "London,uk";
    console.log(1);
});


// CONTROLLERS
weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {

    $scope.city = cityService.city;

    $scope.$watch('city',function() {
        cityService.city = $scope.city;
        console.log($scope.city);

    });
    console.log(2);
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService) {

    $scope.city = cityService.city;
    $scope.days = $routeParams.days;
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast?APPID=f337ba2dddcb7f6e0894cb3a11654fac", { callback: "JSON_CALLBACK" },  { get: { method: "JSONP" }});

    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days});

    $scope.convertToFahrenheit = function(degK) {

        return Math.round((1.8 * (degK - 273)) + 32);
    }

    $scope.convertToDate = function(dt) {

        return new Date(dt * 1000);
    };
    console.log(3);
}]);
/*
//DIRECTIVES
weatherApp.directive("weatherReport", function () {
    return {
        restrict:'E',
        templateUrl: 'directives/weatherReport.html',
        replace: true,
        scope:{
            weatherDay: "=",
            convertToStandard: "&",
            convertToDate: "&",
            dateFormat: '@'
        }
    }

});*/