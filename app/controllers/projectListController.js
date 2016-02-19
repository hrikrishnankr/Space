spaceApp.controller("projectListController", function($scope, Page, Model, $routeParams, $location) {
    Page.setTitle("Detail");
    var id = $scope.id = $routeParams.id;
    $scope.item = Model.get(id);
}