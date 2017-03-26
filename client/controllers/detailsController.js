angular
  .module('App.DetailsController', ['ngRoute', 'App.FBService'])
  .controller('DetailsController', ['$scope', 'FBService', detailsController]);

function detailsController($scope, FBService) {
  $scope.demo = '';
  $scope.business = FBService.getBusiness();
  $scope.log = () => {
    console.log($scope.business)
  }
}
