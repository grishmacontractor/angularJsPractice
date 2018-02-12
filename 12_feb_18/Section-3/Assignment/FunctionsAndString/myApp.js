var my_app = angular.module('my_app', []);

my_app.controller('my_controller',function($scope){
});

var getEmp = function(empcode, empname)
{
    return 'emp info';
}
var getEmpStr = getEmp.toString();
console.log(getEmpStr);