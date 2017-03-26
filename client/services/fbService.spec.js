describe('Artist factory', function() {

  var ArtistFactory, $q, $httpBackend;
  var artist = 'Madonna';

  beforeEach(angular.mock.module('App.ArtistFactory'));

  beforeEach(inject(function(_ArtistFactory_, _$q_, _$httpBackend_) {
    ArtistFactory = _ArtistFactory_;
    $q = _$q_;
    $httpBackend = _$httpBackend_;
  }));

  it('should exist', function() {
    expect(ArtistFactory).toBeDefined();
  });

  describe('fetchArtist()', function() {
    var result, artist;
    var API = `https://api.spotify.com/v1/search?q=${artist}&type=artist`;
    var RESPONSE_SUCCESS = {
      'one': 'one'
    }

    beforeEach(function() {
      result = {};
      spyOn(ArtistFactory, 'fetchArtist').and.callThrough();
    });

    it('should return an object when called with a valid name', function() {
      var artist = 'madonna';
      $httpBackend.whenGET(API).respond(200, $q.when(RESPONSE_SUCCESS));

      expect(ArtistFactory.fetchArtist).not.toHaveBeenCalled();
      expect(result).toEqual({});

      ArtistFactory.fetchArtist()
      .then(function(res) {
        result = res;
      });

      $httpBackend.flush();
    });

  })
});
