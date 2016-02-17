spaceApp.controller('menubarController',['$scope','User',function($scope,User){
	var i=0
	$scope.user = User.query()
	$scope.classArray = []
	$scope.changeHover = function(index){
		for(i=0;i<7;i++)
			$scope.classArray[i] = "hide_color"
		$scope.classArray[index] = "show_color"
	};
}]);