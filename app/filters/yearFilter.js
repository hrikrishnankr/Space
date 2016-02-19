angular.module('yearFilters', [])
	.filter('yearFilter',function(){
		var vacationType =["Loss of Pay","Compensatory","Maternity","Paternity"];
		return function(vacations,year){	
			if(year){
				var newVacation=[];	
				angular.forEach(vacations, function(value, key){
					if(value.from.getFullYear() == year || value.to.getFullYear() == year){
						newVacation.push(value)
					}
				});
				return newVacation
			}
			else
				return vacations		
		}
	}
);