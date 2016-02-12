var spaceApp = angular.module('spaceApp', ['ngRoute']);

spaceApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/hrk', {
        templateUrl: 'partials/vacation.html',
        controller: ''
      })
  }]);