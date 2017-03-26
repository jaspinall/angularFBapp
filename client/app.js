const app = angular
  .module('myApp', [
    'ngRoute',
    'App.HomeController',
    'App.LoginController',
    'App.DetailsController',
    'App.FBService',
    'App.UserService'
  ])
  .directive('navigation', function() {
    return {
      restrict: 'E',
      templateUrl: '../partials/navigation.html'
    };
  });

app.run(['$rootScope', '$window',

  function($rootScope, $window) {

    $window.fbAsyncInit = function() {
      FB.init({
        appId      : '425716787761759',
        cookies    : true,
        xfbml      : true,
        status     : true,
        version    : 'v2.8'
      });
   };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

}])


const configFunction = ($routeProvider) => {

  $routeProvider
    .when('/', {
      templateUrl: './partials/login.html',
      controller: 'LoginController'
    })
    .when('/home', {
      templateUrl: './partials/home.html',
      controller: 'HomeController'
    })
    .when('/details', {
      templateUrl: './partials/details.html',
      controller: 'DetailsController'
    })

}

app.config(configFunction);
