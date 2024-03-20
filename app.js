var myApp = angular.module('myApp', ['ngResource','ngRoute']);

myApp.config(['$routeProvider',
function config($routeProvider) {
  $routeProvider.
    when('/', {
        templateUrl:'./pages/main.html',
        controller: 'mainController'
    }).
    when('/second', {
      templateUrl: './pages/second.html',
      controller: 'secondController'
    }).
    otherwise('/phones');
}
]);

myApp.controller('mainController', function($scope, $log, $filter, $resource, $timeout) {
    
    $log.log("Console log")
    $log.warn("Console warning")
    $log.info("Console info")
    $log.error("Console error")
    $log.debug("Console debug")

    $scope.name = "Omar";
    $scope.handle = "";

    $timeout(function(){
        $scope.name = "Devbot";
    }, 3000)
    
    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    };
    
    $scope.characters = 5;
    
    $scope.rules = [
      
        { rulename: "Must be 5 characters" },
        { rulename: "Must not be used elsewhere" },
        { rulename: "Must be cool" }
        
    ];
});

myApp.controller('secondController', function($scope, $log, $filter, $resource, $timeout) {
    $scope.name = "mate";
    $scope.person = {
        name: 'Jhon Doe',
        address: '555 Main St., New York, NY 12345'
    }
    $scope.people = [
        {
        name: 'John Doe',
        address: '555 Main St.',
        city: 'New York',
        state: 'NY',
        zip: '11111'
        },
        {
        name: 'Jane Doe',
        address: '333 Second St.',
        city: 'Buffalo',
        state: 'NY',
        zip: '22222'
        },
        {
        name: 'George Doe',
        address: '111 Third St.',
        city: 'Miami',
        state: 'FL',
        zip: '33333'
        }
    ]
    
    $scope.formattedAddress = function(person) {
      
        return person.address + ', ' + person.city + ', ' + person.state + ' ' + person.zip;
        
    };
});

myApp.directive("searchResult", function(){
    return {
        restrict: 'AECM',
        templateUrl: './directives/searchresult.html',
        replace: true,
        scope: {
            personObject: "=",
            formattedAddressFunction: "&"
        },
        transclude: true
    }
})