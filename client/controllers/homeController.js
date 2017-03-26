angular
  .module('App.HomeController', ['ngRoute', 'App.FBService', 'App.UserService'])
  .controller('HomeController', ['$scope', '$location', 'FBService', 'UserService', homeController])

function homeController($scope, $location, FBService, UserService) {
  $scope.name = UserService.getUser().name;
  $scope.searchVal = '';
  $scope.results = FBService.getResults();
  $scope.showResults = false;
  $scope.logOut = () => {
    UserService.logOut()
      .then((res) => $location.path('/'));
  }
  $scope.getGeo = () => {
    coords = UserService.getPosition();
    if (!coords.latitude) {
      UserService.getCurrentPosition()
        .then((res) => {
          UserService.setPosition(res);
          coords = UserService.getPosition();
          getFBData();
        })
    } else {
      getFBData();
    }
  };
  $scope.seeDetails = (id) => {
    FBService.setBusiness(id);
    $location.path('/details');
  },
  coords = {},
  getFBData = () => {
    FBService.getFBEvents(coords.latitude, coords.longitude, $scope.searchVal)
      .then((res) => {
        if (res.data) {
          FBService.setResults(res.data);
          $scope.results = FBService.getResults();
          $scope.showResults = true;
        }
      })
      .catch(err => console.log(err))
    }
}
