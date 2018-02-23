// JavaScript source code
var app = angular.module('myApp', ['ngRoute']);
app.controller('formCtrl', function ($scope, $window) {
    //variables declaration
    $scope.data = [];
    //assigning default values
    $scope.fullName = "";
    $scope.info = "Input Person Details";
    $scope.gender = {
        name: 'Female'
    };
    $scope.goEdit = false;
    var newobj = {};
    $scope.status = true;
    $scope.editstatus = false;
//---------------------defaultValues function
    var defaultValues = function () {
        $scope.fullName = "";
        $scope.gender = {
            name: 'Female'
        };
        console.log("default values called....");
    }
//---------------------add_data function
    $scope.add_data = function () {
        newobj = { fullName: $scope.fullName, gender: $scope.gender.name };
        $scope.data.push(newobj);
        defaultValues();
        $scope.info = "Record Added.....";
        $scope.status = true;
    }
//---------------------changeStatus function
    $scope.changeStatus = function () {
        //console.log("change status called....."+$scope.fullName.length)
        if($scope.fullName) {
            $scope.status = false;
            $scope.editstatus = false;
        }

        if($scope.fullName == undefined) {
            $scope.editstatus = true;
            $scope.fullName="";
        }
    }
//---------------------remove function
    $scope.remove = function (index) {

        if ($window.confirm("Please confirm?")) {
            $scope.Message = "You clicked YES.";
            $scope.data.splice(index, 1);
            $scope.info = "Record Deleted.....";
           defaultValues();

        } else {
            $scope.Message = "You clicked NO.";
        }
    }
//---------------------editRec function
    $scope.editRec = function (index) {
            $scope.fullName = $scope.data[index].fullName;
            $scope.gender.name = $scope.data[index].gender;
            $scope.goEdit = true;
            $scope.index=index;
            $scope.info = "Modify Person Details...";
            $scope.status = false;

    }
//---------------------updateData function
    $scope.updateData = function () {
        console.log("in update data index = "+$scope.index);
        $scope.data[$scope.index].fullName = $scope.fullName;
        $scope.data[$scope.index].gender = $scope.gender.name;
        $scope.goEdit = false;
        $scope.info = "Record Updated.....";
        defaultValues();
    }
});