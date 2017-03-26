angular
  .module('App.HomeController', ['ngRoute', 'App.FBService', 'App.UserService'])
  .controller('HomeController', ['$scope', '$location', 'FBService', 'UserService', homeController])
  .directive('business', function() {
    return {
      restrict: 'E',
      templateUrl: '../partials/business.html'
    };
});

function homeController($scope, $location, FBService, UserService) {
  $scope.searchVal = '';
  $scope.results = FBService.getResults();
  $scope.showResults = false;
  $scope.getGeo = () => {
    let coords = UserService.getPosition();
    FBService.getFBEvents(coords.latitude, coords.longitude, $scope.searchVal)
      .then((res) => {
        if (res.data) {
          FBService.setResults(res.data);
          $scope.results = FBService.getResults();
          $scope.showResults = true;
        }
      })
  };
  $scope.seeDetails = (id) => {
    FBService.setBusiness(id);
    $location.path('/details');
  }
}
