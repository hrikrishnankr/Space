spaceApp.controller('menubarController',['$scope','jsonService',function($scope,jsonService){
	var i=0
	
	jsonService.fetchAllJson("currentUser").success(function(data) {
    	$scope.user = data
  	});

	$scope.classArray = []
	$scope.changeHover = function(index){
		for(i=0;i<7;i++)
			$scope.classArray[i] = "hide_color"
		$scope.classArray[index] = "show_color"
	};
}]);