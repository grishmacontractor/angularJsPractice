var my_app = angular.module('my_app', []);

my_app.controller('my_controller',function($scope){
    $scope.company = 'Jeavio';
    $scope.address = 'Alkapuri';
    
    $scope.getCompany = function() {
        return 'Jeavio';
    }
    $scope.getCompany();
    
    console.log($scope);    
});