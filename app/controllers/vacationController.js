spaceApp.controller('vacationController',['$scope','jsonService','$http', 'notifications',function($scope,jsonService,$http,notifications){
	var err=0,msg="",date;
	date = new Date().getFullYear();
	
	jsonService.fetchAllJson("currentUser").success(function(data) {
    	$scope.user = data
  	});
	
	$scope.vacations = []
	$scope.yearArray = [date,date-1,date-2,date-3,date-4,date-5,date-6,date-7]
	var vacationType =["Loss of Pay","Compensatory","Maternity","Paternity"];
	
    jsonService.fetchAllJson("approver").success(function(data) {
    	$scope.approvers = data;
  	});

	jsonService.fetchAllJson("vacation").success(function(data) {
    	angular.forEach(data, function(value, key){
    		$scope.vacations.push({
    			"from" : new Date(value.from),
				"to" : new Date(value.to),
				"noDays" : value.noDays,
				"vacationType" : vacationType[value.vacationType-1],
				"approver" : value.approver,
				"status" : "pending",
				"remarks" : ""
    		})
    	});
    });
	
	$scope.submit = function() {
		msg=""
		if($scope.from&&$scope.to&&$scope.noDays&&$scope.sendTo){
			$scope.vacations.push({
								"from" : $scope.from,
								"to" : $scope.to,
								"noDays" : $scope.noDays,
								"vacationType" : vacationType[$scope.vacationType-1],
								"approver" : $scope.sendTo,
								"status" : "pending",
								"remarks" : ""
							});
			notifications.showSuccess({message: 'Request has been sent'});

			//code to send the data to the back end 

		}
		if(!$scope.noDays){
			msg="No: days cannot be null -";
			err=1;
		}

		if(!$scope.from){
			msg+="From date cannot be null -";
			err=1;
		}

		if(!$scope.to){
			msg+="To date cannot be null -";
			err=1;
		}

		if(!$scope.sendTo){
			msg+="send request to field cannot be null"
			err=1;
		}

		if(err==1){
			notifications.showError({ message: msg});
			err=0;
			msfg=""
		}
	};
}]);