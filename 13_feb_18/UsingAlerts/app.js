var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {
    
    $scope.handle = '';
    
    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    };
    
    $scope.characters = 5;


    $scope.colors = [
        {colorname:"red"},
        {colorname:"green"},
        {colorname:"yellow"},
        {colorname:"pink"},
    ];
    
    console.log($scope.colors);
    
}]);
