angular
  .module('App.DetailsController', ['ngRoute', 'App.FBService', 'App.UserService'])
  .controller('DetailsController', ['$scope', 'FBService', 'UserService', detailsController]);

function detailsController($scope, FBService, UserService) {
  $scope.demo = '';
  $scope.business = FBService.getBusiness();
  $scope.logOut = () => {
    UserService.logOut()
      .then((res) => $location.path('/'));
  }
}
