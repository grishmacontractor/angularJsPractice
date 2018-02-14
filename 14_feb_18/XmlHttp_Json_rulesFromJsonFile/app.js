var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$timeout', function ($scope, $timeout) {

        $timeout(function () {
            var rulesrequest = new XMLHttpRequest();
            rulesrequest.onreadystatechange = function () {
                $scope.$apply(function () {
                    if (rulesrequest.readyState == 4 && rulesrequest.status == 200) {
                        $scope.rules = JSON.parse(rulesrequest.responseText);
                    }
                });
            }
            rulesrequest.open("GET", "jsondata.json", true);
            rulesrequest.send();
        },500);
}]);