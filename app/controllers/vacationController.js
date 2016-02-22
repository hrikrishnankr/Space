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
		var oneDay = 24*60*60*1000
		var firstDate = new Date($scope.from)
		var secondDate = new Date($scope.to)
		var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)))

		var data = {
					"from" : $scope.from,
					"to" : $scope.to,
					"noDays" : $scope.noDays,
					"vacationType" : vacationType[$scope.vacationType-1],
					"approver" : $scope.sendTo,
					"status" : "pending",
					"remarks" : ""
				}

		if($scope.from&&$scope.to&&$scope.noDays&&$scope.sendTo){
			if(diffDays == $scope.noDays && $scope.noDays>0 && $scope.isUnique(data)){
				$scope.vacations.push(data);
				notifications.showSuccess({message: 'Request has been sent'});
				//code to send the data to the back end 
			}
			else{
				notifications.showError({ message: "Date difference does'nt match"});
			}
		}
		if(!$scope.noDays){
			msg="No: days cannot be null";
			err=1;
		}

		else if(!$scope.from){
			msg+="From date cannot be null";
			err=1;
		}

		else if(!$scope.to){
			msg+="To date cannot be null";
			err=1;
		}

		else if(!$scope.sendTo){
			msg+="send request to field cannot be null"
			err=1;
		}

		if(err==1){
			notifications.showError({ message: msg});
			err=0;
			msfg=""
		}
	};

	$scope.isUnique = function(object){
		var flag = 0
		angular.forEach($scope.vacations, function(value, key){
			if(object.from == value.from && object.to == value.to)
				flag = 1
		});
		if(flag==1)
			return false
		else
			return true
	};
	
}]);
