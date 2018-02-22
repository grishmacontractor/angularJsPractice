// JavaScript source code
var app = angular.module('myApp', []);
app.controller('formCtrl', function ($scope) {
    //variables declaration
    $scope.data = [];
    //assigning default values
    $scope.fullName = "Grishma";
    $scope.gender = {
        name: 'Female'
    };
    var newobj = {};

    $scope.display = function () {
        newobj = { fullName: $scope.fullName, gender: $scope.gender.name };
        $scope.data.push(newobj);
        //$scope.info = Object.values(newobj) + " Data Added to Array.....";
        $scope.info = "Data Added.....";
        console.log("display called.....");
        console.log($scope.data);

    }

    $scope.remove = function (p, index) {
        console.log("function called");
        $scope.data.splice(index, 1);
        console.log(p + "to be removed....");
        console.log(p);
        console.log("index = " + index);
        $scope.info = "Record Deleted.....";
    }

});