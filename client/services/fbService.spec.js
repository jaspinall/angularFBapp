describe('FBService', function() {

  var FBService, $q, $httpBackend;
  var searchVal = 'coffee';

  beforeEach(angular.mock.module('App.FBService'));

  beforeEach(inject(function(_FBService_, _$q_, _$httpBackend_) {
    FBService = _FBService_;
    $q = _$q_;
    $httpBackend = _$httpBackend_;
  }));

  it('should exist', function() {
    expect(FBService).toBeDefined();
  });

  describe('getFBEvents()', function() {
    var result, searchVal;
    var API = 'https://graph.facebook.com/v2.8/search/?access_token=EAAGDLZBno0l8BAFkfIJxZBmIm4mctidewHZA4CbufGtZA0QXonyyOh9PYLNAGSsHL61J3XdF9dPCvZBcpBB8YYuBbHe2ZCVkNPL2F72QVoKcfDwqJu1NOdpaeOgajmGKZAZB9ylW16wXWyhPh1hiswBJpWx9U3ZAkIwMZBI75zSpDCCZAPyHYxB1gb5&accessToken=EAAGDLZBno0l8BAFkfIJxZBmIm4mctidewHZA4CbufGtZA0QXonyyOh9PYLNAGSsHL61J3XdF9dPCvZBcpBB8YYuBbHe2ZCVkNPL2F72QVoKcfDwqJu1NOdpaeOgajmGKZAZB9ylW16wXWyhPh1hiswBJpWx9U3ZAkIwMZBI75zSpDCCZAPyHYxB1gb5&callback=FB.__globalCallbacks.f341a1961a29b74&center=33.8564313%2C-118.38823839999999&distance=10000&fields=about%2Cdescription%2Ccategory%2Cfan_count%2Cname%2Cfeed%7Bmessage%2Cpicture%2Cfrom%2Cupdated_time%7D%2Clocation%2Coverall_star_rating%2Cpicture&limit=10&method=get&pretty=0&q=beer&sdk=joey&type=place';
    var RESPONSE_SUCCESS = {
      'one': 'one'
    }

    beforeEach(function() {
      result = {};
      spyOn(FBService, 'getFBEvents').and.callThrough();
    });

    it('should return an object when called with a valid name', function() {
      $httpBackend.whenGET(API).respond(200, $q.when(RESPONSE_SUCCESS));

      expect(FBService.getFBEvents).not.toHaveBeenCalled();
      expect(result).toEqual({});

      FBService.getFBEvents()
      .then(function(res) {
        result = res;
      });

      $httpBackend.flush();
    });

  })
});
