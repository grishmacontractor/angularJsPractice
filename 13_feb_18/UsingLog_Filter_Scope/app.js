var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController', function($scope, $log, $filter,$resource) { 
    //console.log($resource);
    $log.log("using log");
    $log.info("using info");
    $log.warn("Warning");
    $log.debug("debug");
    $log.error("error");
    
    
    $scope.name = 'Grishma'
    $scope.formattedName = $filter('uppercase')($scope.name)
});