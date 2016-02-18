spaceApp.controller("projectController", function($scope, $http) {
    $http.get("../assets/JSON/project.json").success(function(data) {
        $scope.details = data;
        $scope.status_options = $scope.details.stats;
        $scope.vertical_options = $scope.details.verticals;
        $scope.bill_type_options = $scope.details.billtypes;
        $scope.category_options = $scope.details.categories;
        console.log($scope.status_options);
    });

    $scope.saved = localStorage.getItem('projects');
    $scope.projects = (localStorage.getItem('projects') !== null) ? JSON.parse($scope.saved) : [];
    $scope.showHide = function() {
        $scope.display = !$scope.display;
        console.log($scope.display);
    }
    $scope.submit = function() {
        $scope.projects.push({
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
// spaceApp.filter('myStrictFilter', function($filter) {
//     return function(input, predicate) {
//         return $filter('filter')(input, predicate, true);
//     }
// });
// spaceApp.filter('unique', function() {
//     return function(arr, field) {
//         var o = {},
//             i, l = arr.length,
//             r = [];
//         for (i = 0; i < l; i += 1) {
//             o[arr[i][field]] = arr[i];
//         }
//         for (i in o) {
//             r.push(o[i]);
//         }
//         return r;
//     };
// });