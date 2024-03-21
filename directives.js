weatherApp.directive("weatherReport", function ()
{
    return {
        restrict: 'E',
        templateUrl: './directives/weatherReport.html',
        replace: true,
        scope: {
            day: "=",
            format: "@",
            convertToDate: "&"
        },
        transclude: true
    }
})