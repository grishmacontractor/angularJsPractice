//DIRECTIVES
weatherApp.directive("weatherReport", function () {
    return {
        restrict:'E',
        templateUrl: 'directives/weatherReport.html',
        //replace: true,
        scope:{
            weatherDay1: "=",
            convertToStandard1: "&",
            convertToDate1: "&",
            dateFormat1: "@",
            testVal: "="
        }

    }
});