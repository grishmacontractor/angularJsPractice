var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {

    $scope.plants = [{
        name: 'Tulsi',
        price: '400Rs',
        desc: 'has medicinal properties'
    },
    {
        name: 'Sunflower plant',
        price: '500Rs',
        desc: 'has seeds'
    },
    {
        name: 'Rose Plant',
        price: '400Rs',
        desc: 'used in sweets'
    }

    ]

    $scope.getPlantDetails = function (plant) {
        var str = plant.name + ' whose price is  ' + plant.price + ' ' + plant.desc;
        return str;
    }
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    
    
}]);
myApp.directive("usePanel", function () {
    return{
        restrict: 'AECM',
        templateUrl: 'directives/usePanel.html',
        replace: true,
        scope: {
            plantObject: "=",
            getPlantDetailsFunction: "&",
        },
        transclude: true
    }
})