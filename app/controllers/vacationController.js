spaceApp.controller('vacationController',['$scope','User','$http', function($scope,User,$http){
	$scope.user = User.query()
	$scope.noDays=0;
	var vacationType =["Loss of Pay","Compensatory","Maternity","Paternity"];
	$http.get('../assets/JSON/approver.json').success(function(data) {
    	$scope.approvers = data;
    });

	$http.get('../assets/JSON/vacation.json').success(function(data) {
    	$scope.vacations = data;
    });
	$scope.submit = function() {
		// if($scope.from&&$scope.to&&$scope.noDays&&$scope.sendTo){
			var from = $scope.from.getMonth()+"/"+$scope.from.getDate()+"/"+$scope.from.getFullYear();
			var to = $scope.to.getMonth()+"/"+$scope.to.getDate()+"/"+$scope.to.getFullYear();
			$scope.vacations.push({
								"dateRange" : from +"-"+ to,
								"noDays" : $scope.noDays,
								"vacationType" : vacationType[$scope.vacationType-1],
								"approver" : $scope.sendTo,
								"status" : "pending",
								"remarks" : ""
							});
		// }
	};
}]);