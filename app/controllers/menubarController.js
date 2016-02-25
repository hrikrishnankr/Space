spaceApp.controller('menubarController',['$scope','jsonService',function($scope,JSONService){
	var i=0
	
	JSONService.fetchAllJson("currentUser").success(function(data) {
    	$scope.user = data
  	});

	$scope.classArray = []
	$scope.changeHover = function(index){
		for(i=0;i<7;i++)
			$scope.classArray[i] = "hide_color"
		$scope.classArray[index] = "show_color"
	};
}]);