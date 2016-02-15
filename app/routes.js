var spaceApp = angular.module('spaceApp', ['ngRoute','currentUserServices']);

spaceApp.config(['$routeProvider',
  function($routeProvider) {
   	$routeProvider.
   	when('/dashboard', {
   		templateUrl : '../views/partials/dashboard.html'
   	}).
   	when('/projects',{
   		templateUrl : '../views/partials/projectList.html'
   	}).
   	when('/vacation',{
   		templateUrl : '../views/partials/vacation.html',
   		controller : 'vacationController'
   	}).
   	otherwise({
   		redirectTo: '/dashboard'
   	})
  }]);