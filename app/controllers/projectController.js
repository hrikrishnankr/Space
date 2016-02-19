spaceApp.controller("projectController", function($scope, $http) {
    $http.get("../assets/JSON/project.json").success(function(data) {
        $scope.details = data;
        $scope.status_options = $scope.details.stats;
        $scope.vertical_options = $scope.details.verticals;
        $scope.bill_type_options = $scope.details.billtypes;
        $scope.category_options = $scope.details.categories;
    });
    $scope.saved = localStorage.getItem('projects');
    $scope.projects = (localStorage.getItem('projects') !== null) ? JSON.parse($scope.saved) : [];
    $scope.showHide = function() {
        $scope.display = !$scope.display;
    }
    $scope.submit = function() {
        $scope.index = $scope.projects.length;
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
        localStorage.setItem('projects', JSON.stringify($scope.projects));
    }
});