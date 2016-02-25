spaceApp.controller('projectController', ['$routeParams', '$scope', 'localstorageService' ,function($routeParams,$scope,localstorageService) {
   var id = $routeParams.id;
 console.log(id);
 var local=  localstorageService.getObject('projects');
   $scope.details =_.find(local, function(item) {
    return item.id ==$routeParams.id; 
});
}]);