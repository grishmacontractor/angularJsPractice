// JavaScript source code
var myApp = angular.module('myApp', ['ngRoute']);
//---------------------------------------------------------------CONFIGURATION
myApp.config(function ($provide) {

    $provide.decorator('$exceptionHandler', function ($delegate) {

        return function (exception, cause) {
            $delegate(exception, cause);

            alert('Error occurred! Please contact admin.'+ exception.toString());
            alert('Error occurred! cause is .'+ cause.toString());
        };
    });
});
//---------------------------------------------------------------CONTROLLER
myApp.controller('formCtrl', function ($scope) {
//-------------------------------------------------variables declaration & assigning default values
    $scope.data = [];
    $scope.fullName = "";
    $scope.info = "Input Person Details";
    $scope.gender = {
        name: 'Female'
    };
    $scope.goEdit = false;
    var newobj = {};
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
    var defaultValues = function () {
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
       // $scope.qualification = "";
        console.log("default values called....");
    }

//----------------------------------------------------------------------add_data function
    $scope.add_data = function () {
        //var a = $filter('date')($scope.today, 'dd-MM-yyyy');
        newobj = { fullName: $scope.fullName, gender: $scope.gender.name, hobbies: $scope.hobbies, qualification: $scope.qualification, today: $scope.today};
        $scope.data.push(newobj);
        defaultValues();
        $scope.info = "Record Added.....";
        $scope.status = true;

        //console.log("add_data");
        //console.log(harr);
    }
//---------------------------------------------------------------changeStatus function
    $scope.changeStatus = function () {
        //console.log("change status called....."+$scope.fullName.length)
        if($scope.fullName && $scope.qualification ) {
            $scope.status = false;
            $scope.editstatus = false;
        }
        if($scope.qualification == undefined) {
            $scope.status = true;
        }

        if($scope.fullName == undefined) {
            $scope.editstatus = true;
            $scope.fullName="";
        }

        if(!$scope.qualification) {
            $scope.editstatus = true;
           // $scope.fullName="";
        }
        console.log("in changestatus "+ $scope.qualification);
    }

//---------------------------------------------------------------editRec function
    $scope.editRec = function (index) {
            $scope.fullName = $scope.data[index].fullName;
            $scope.gender.name = $scope.data[index].gender;
            $scope.hobbies=$scope.data[index].hobbies;
            $scope.qualification=$scope.data[index].qualification;
            $scope.today=$scope.data[index].today;
          /*  console.log("in edit rec");
            console.log($scope.hobbies);*/
            $scope.goEdit = true;
            $scope.index=index;
            $scope.info = "Modify Person Details...";
            $scope.status = false;

    }
//---------------------------------------------------------------updateData function
    $scope.updateData = function () {
        console.log("in update data index = "+$scope.index);
        $scope.data[$scope.index].fullName = $scope.fullName;
        $scope.data[$scope.index].gender = $scope.gender.name;
        $scope.data[$scope.index].hobbies= $scope.hobbies;
        $scope.data[$scope.index].qualification= $scope.qualification;
        $scope.data[$scope.index].today = $scope.today;
        $scope.goEdit = false;
        $scope.info = "Record Updated.....";
        defaultValues();
        console.log("updateData");
       // console.log($scope.qualification);
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
});