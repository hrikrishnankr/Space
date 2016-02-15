spaceApp.controller('menubarController',['$scope','User',function($scope,User){
	$scope.user = User.query();
}]);