var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$timeout', function($scope, $filter, $timeout) {
    
    $scope.handle = '';
    
    $scope.lowercasehandle = function() {
        return $filter('uppercase')($scope.handle);
    };
    
    $scope.$watch('handle', function(newValue, oldValue) {
        
        console.info('Changed!');
        console.log('Old:' + oldValue);
        console.log('New:' + newValue);
        
    });
    
    $timeout(function() {
       
        $scope.handle = 'new Address';
        console.log('Scope changed!');
        
    }, 3000);
    
}]);
