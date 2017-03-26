
angular
  .module('App.UserService', [])
  .factory('UserService', ['$q', '$window', userService]);

function userService($q, $window) {
  let user = {};
  let coords = {};
  return ({
    getFacebookData: () => {
      var deferred = $q.defer();
      FB.login(function() {
        FB.api('/me', 'get', {}, function(res) {
          if (!res || res.error) {
            deferred.reject('error occurred')
          } else {
            deferred.resolve(res)
          }
        })
      }, {scope: 'publish_actions'});
      return deferred.promise;
    },
    getCurrentPosition: () => {
      var deferred = $q.defer();

      if (!$window.navigator.geolocation) {
          deferred.reject('Geolocation not supported.');
      } else {
        $window.navigator.geolocation.getCurrentPosition(
          function (position) {
            deferred.resolve(position);
          },
          function (err) {
            deferred.reject(err);
          });
      }
      return deferred.promise;
    },
    setPosition: (data) => {
      coords.longitude = data.coords.longitude;
      coords.latitude = data.coords.latitude;
    },
    getPosition: () => {
      return coords;
    },
    setUser: (user) => {
      user = user;
    }
  })
}
