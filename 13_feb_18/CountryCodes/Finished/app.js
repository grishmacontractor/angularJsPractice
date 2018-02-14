var myApp = angular.module('myapp', ['ngMessages', 'ngResource']);

myApp.controller('mainController', function($scope, $log, $filter, $resource) {
    
    console.log($resource);
    
});