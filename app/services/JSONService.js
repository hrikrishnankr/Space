spaceApp.factory('jsonService', ['$http', function($http) {
	var APIJson = {};
	APIJson.fetchAllJson =function(file){
        return $http.get('/app/assets/JSON/'+file+'.json');
    }
    return APIJson;
}]);
