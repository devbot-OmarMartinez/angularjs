weatherApp.controller('mainController', function ($scope, $location, cityService)
{
    $scope.city = cityService.city;

    $scope.$watch('city', function ()
    {
        cityService.city = $scope.city;
    });

    $scope.submit = function(){
        $location.path('/forecast')
    }
});

weatherApp.controller('forecastController', function ($scope, cityService, weatherService, $routeParams)
{
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || 2
    
    $scope.weatherResult = weatherService.GetWeather($scope.city,$scope.days)

    console.log($scope.weatherResult);

    $scope.convertToDate = function (dt)
    {
        return new Date(dt * 1000);
    };
});