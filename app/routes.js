var spaceApp = angular.module('spaceApp', ['ngRoute','currentUserServices']);

spaceApp.config(['$routeProvider',
  function($routeProvider) {
   	$routeProvider.
   	when('/dashboard', {
   		templateUrl : '../views/partials/dashboard.html',
   		controller : 'dashboardController'
   	}).
   	when('/projects',{
   		templateUrl : '../views/partials/projectList.html',
   		controller : 'projectListController'
   	}).
   	when('/vacation',{
   		templateUrl : '../views/partials/vacation.html',
   		controller : 'vacationController',
      css : '../assets/stylesheets/vacation.css'
   	}).
   	otherwise({
   		redirectTo: '/dashboard'
   	})
  }]);