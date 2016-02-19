.controller('productDetailCtrl', function($scope, $state, $stateParams) {
    $scope.product = $scope.products[$stateParams.id]
    $scope.text = "The detail was selected from parent $scope.products";
  })