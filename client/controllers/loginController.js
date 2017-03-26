angular
  .module('App.LoginController', ['ngRoute', 'App.UserService'])
  .controller('LoginController', ['$scope', '$location', 'UserService', loginController])

function loginController($scope, $location, UserService) {
  $scope.login = () => {
    UserService.getFacebookData()
      .then((res) => {
        UserService.setUser(res);
        $location.path('/home');
      })
    UserService.getCurrentPosition()
      .then((res) => {
        UserService.setPosition(res);
      })
  }
}
