var spaceApp = angular.module('spaceApp', ['ngRoute', 'ngNotificationsBar', 'yearFilters', 'smart-table', 'currentUserServices']);
spaceApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/dashboard', {
            templateUrl: '../views/partials/dashboard.html',
            controller: 'dashboardController'
        }).
        when('/projects', {
            templateUrl: '../views/partials/projectList.html',
            controller: 'projectListController'
        }).
        when('/vacation', {
            templateUrl: '../views/partials/vacation.html',
            controller: 'vacationController',
            css: ['../assets/stylesheets/vacation.css', '../assets/stylesheets/ngNotificationsBar.css']
        }).
        when('/projects/:id', {
            templateUrl: '../views/partials/project.html',
            controller: 'projectController',
            css: '../assets/stylesheets/style.css'
        }).
        otherwise({
            redirectTo: '/dashboard'
        })
    }
]);