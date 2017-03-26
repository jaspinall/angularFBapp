describe('HomeController', function() {
  var $controller, $rootScope, HomeController;

  beforeEach(angular.mock.module('App.HomeController'));

  beforeEach(inject(function(_$controller_, $rootScope) {
    $controller = _$controller_;
    $scope = $rootScope.$new();
    HomeController = $controller('HomeController', {
      $scope: $scope,
    });
  }));

  it('should exist', function() {
    expect(HomeController).toBeDefined();
  });

  it('should store empty values before any search is conducted', function() {
    expect($scope.featuredArtist).toBe('');
    expect($scope.relatedArtists).toBe('');
    expect($scope.searchVal).toBe('');
  });

});
