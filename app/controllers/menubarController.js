var menubarModule = angular.module('menubarModule', []);

menubarModule.controller('menubarController',['$scope','User',function($scope,User){
	$scope.user = User.query();
}]);