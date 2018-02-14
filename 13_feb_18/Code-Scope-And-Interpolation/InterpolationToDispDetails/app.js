var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', function($scope) {

    $scope.address = "Alkapuri Siddharth Complex";
    $scope.city="Vadodara";
    $scope.name="John";
}]);
