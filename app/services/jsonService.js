spaceApp.service('jsonService', ['$http', function($http) {
    var APIJson = {};
    APIJson.fetchAllJson = function(file) {
        return $http.get('../assets/JSON/' + file + '.json');
    }
    return APIJson;
}]);