spaceApp.controller('projectListController', function($scope, $http, jsonService, localstorageService) {
    $scope.details = [];
    var fetch = jsonService.fetchAllJson("project");
    fetch.success(function(data) {
        $scope.details = data;
        $scope.status_options = $scope.details.stats;
        $scope.vertical_options = $scope.details.verticals;
        $scope.bill_type_options = $scope.details.billtypes;
        $scope.category_options = $scope.details.categories;
    });
    $scope.saved = localstorageService.get('projects');
    $scope.projects = !!$scope.saved ? localstorageService.getObject('projects') : [];
    $scope.showHide = function() {
        $scope.display = !$scope.display;
    }
    $scope.index = $scope.projects.length;
    $scope.submit = function() {
        $scope.projects.push({
            id: $scope.index,
            project: $scope.project,
            customer: $scope.customer,
            pm: $scope.pm,
            billtype: $scope.billtype,
            sdate: $scope.sdate,
            tech: $scope.tech,
            stat: $scope.stat,
            vertical: $scope.vertical,
            category: $scope.category,
            detail: $scope.detail
        });
        localstorageService.setObject('projects', $scope.projects);

    }
});
