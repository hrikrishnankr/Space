
var spaceApp= angular.module('spaceApp', ['ngRoute','currentUserServices','smart-table']);

spaceApp.config(['$routeProvider',
  function($routeProvider) {
   	$routeProvider.
   	when('/dashboard', {
   		templateUrl : '../views/partials/dashboard.html'
   	}).
   	when('/projects',{
   		 templateUrl : '../views/partials/project.html',
        controller : 'projectController',
        css : '../assets/stylesheets/style.css'
   	}).
   	when('/vacation',{
   		templateUrl : '../views/partials/vacation.html',
   		controller : 'vacationController',
       css : '../assets/stylesheets/style.css'
   	}).
 
   	otherwise({
   		redirectTo: '/dashboard'
   	})
  }]);
