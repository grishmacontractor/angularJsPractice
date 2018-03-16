// JavaScript source code
let myApp = angular.module('myApp', ['ngRoute','validation', 'validation.rule']);
//---------------------------------------------------------------CONFIGURATION
myApp.config(function ($provide,$qProvider) {
    $qProvider.errorOnUnhandledRejections(false);

    $provide.decorator('$exceptionHandler', function ($delegate) {

        return function (exception, cause) {
            $delegate(exception, cause);

            alert('Error occurred! Please contact admin.'+ exception);
            alert('Error occurred! cause is .'+ cause);
        };
    });
});

//---------------------------------------------------------------CONTROLLER
myApp.controller('formCtrl', function ($scope,$window) {
//-------------------------------------------------variables declaration & assigning default values

    $scope.data = [];
    $scope.fullName = "";
    $scope.info = "Input Person Details";
    $scope.gender = {
        name: 'Female'
    };
    $scope.goEdit = false;
    let newobj = {};
    $scope.status = true;
    $scope.editstatus = false;

    //-------------------------------------------------creating array to assign values to checkbox
    $scope.hobbies = [{
        hid: 1,
        name: 'Reading',
        selected: true
    }, {
        hid: 2,
        name: 'Travelling',
        selected: false
    }, {
        hid: 3,
        name: 'Photography',
        selected: false
    }];
    //----------------------------------------------------------------------defaultValues function
    let defaultValues = function () {
        $scope.fullName = "";
        $scope.gender = {
            name: 'Female'
        };
        $scope.hobbies = [{
            hid: 1,
            name: 'Reading',
            selected: true
        }, {
            hid: 2,
            name: 'Travelling',
            selected: false
        }, {
            hid: 3,
            name: 'Photography',
            selected: false
        }];
        $scope.qualification = "";
        $scope.today= undefined;
    }

    //----------------------------------------------------------------------add_data function
    $scope.add_data = function () {
        let hob_arr = angular.copy($scope.hobbies);
        newobj = { fullName: $scope.fullName, gender: $scope.gender.name, hobbies: hob_arr, qualification: $scope.qualification, today: $scope.today};
        $scope.data.push(newobj);


        defaultValues();
        $scope.info = "Record Added.....";
        $scope.status = true;

        let Form1 = this.Form1;
        Form1.$setPristine();

    }

    //---------------------------------------------------------------editRec function
    $scope.editRec = function (index) {
        $scope.fullName = $scope.data[index].fullName;
        $scope.gender.name = $scope.data[index].gender;
        $scope.hobbies=angular.copy($scope.data[index].hobbies);
        $scope.qualification=$scope.data[index].qualification;
        $scope.today=$scope.data[index].today;
        $scope.goEdit = true;
        $scope.index=index;
        $scope.info = "Modify Person Details...";
        $scope.status = false;

    }
    //---------------------------------------------------------------updateData function
    $scope.updateData = function () {
        // console.log("in update data index = "+$scope.index);
        $scope.data[$scope.index].fullName = $scope.fullName;
        $scope.data[$scope.index].gender = $scope.gender.name;
        $scope.data[$scope.index].hobbies= angular.copy($scope.hobbies);
        $scope.data[$scope.index].qualification= $scope.qualification;
        $scope.data[$scope.index].today = $scope.today;
        $scope.goEdit = false;
        $scope.info = "Record Updated.....";
        defaultValues();
    }
    //---------------------------------------------------------------remove function
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
});//end controller