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
myApp.service('locationService', function () {
   var self = this;
   this.loc = 'Vadodara';
   this.locLength = function () {
       return self.loc.length;
   };
});
myApp.controller('homeController', ['locationService','$scope','$log', function(locationService,$scope,$log) {

    $scope.loc = locationService.loc;

    $scope.$watch('loc', function () {
        locationService.loc = $scope.loc;
    });

    $log.log(locationService.loc);
    $log.log(locationService.locLength());


}]);

myApp.controller('aboutUsController', ['locationService','$scope','$routeParams','$log', function(locationService,$scope,$routeParams,$log) {


    $scope.loc = locationService.loc;

    $scope.$watch('loc', function () {
        locationService.loc = $scope.loc;
    });
}]);
