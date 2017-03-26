angular
  .module('App.FBService', [])
  .factory('FBService', ['$q', fbService]);

function fbService($q, $window) {
  let results = [];
  let selected = '';
  return ({
    getFBEvents: (lat, long, query) => {
      var deferred = $q.defer();
      var urlString = '/search/?q=' + query + '&limit=10&type=place&center=' + lat + ',' + long + '&distance=10000&fields=about,description,category,fan_count,name,feed{message,picture,from,updated_time},location,overall_star_rating,picture';
      var accessToken;
      FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
          accessToken = response.authResponse.accessToken;
          FB.api(urlString, 'get', { accessToken }, function(res) {
            if (!res || res.error) {
              deferred.reject(res.error)
            } else {
              deferred.resolve(res)
            }
          })
        } else {
          console.log('problem accessing auth token')
        }
      });
      return deferred.promise;
    },
    getResults: () => {
      return results;
    },
    setResults: (data) => {
      results = data;
    },
    getBusiness: () => {
      return selected;
    },
    setBusiness: (id) => {
      selected = results.filter((el) => {
        if (el.id == id) {
          return el;
        }
      })[0]
    },
  })
};
