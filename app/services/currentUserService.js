var currentUserServices = angular.module('currentUserServices', ['ngResource']);

currentUserServices.factory('User', ['$resource',function($resource){
    return $resource('../assets/JSON/currentUser.json', {}, {
      query : {method:'GET',isArray:true}
    });
  }]);