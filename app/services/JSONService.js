spaceApp.factory('jsonService', ['$http', function($http) {
	var APIJson = {};
	APIJson.fetchAllJson =function(file){
        return $http.get('/Space/app/assets/JSON/'+file+'.json');
    }
    return APIJson;
}]);
