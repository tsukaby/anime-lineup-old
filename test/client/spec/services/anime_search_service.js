'use strict';

describe('Service: AnimeSearchService', function () {

  // load the service's module
  beforeEach(module('animeLineupApp'));

  // instantiate service
  var $httpBackend;
  var AnimeSearchService;
  var rootScope;
  var getData = [
    {
      title: 'anime1',
      url: 'http://example.com/anime1',
      thumbnailDelay: 0,
      season: 'spring',
      year: 2014
    }
  ];

  beforeEach(inject(function (_$httpBackend_, _AnimeSearchService_, $rootScope) {
    rootScope = $rootScope;
    $httpBackend = _$httpBackend_;
    AnimeSearchService = _AnimeSearchService_;
  }));

  it('AnimeSearchServiceが定義されていること', function () {
    expect(!!AnimeSearchService).toBe(true);
  });

  it('タイトルによる検索ができること', function () {
    $httpBackend.expectGET('/api/animes/anime1').respond(getData);

    expect(rootScope.animes).toBeUndefined();
    AnimeSearchService.searchByTitle('anime1');
    $httpBackend.flush();
    expect(rootScope.animes[0].title).toEqual(getData[0].title);
  });

  it('年と期による検索ができること', function () {
    $httpBackend.expectGET('/api/animes/2010/winter').respond(getData);

    expect(rootScope.animes).toBeUndefined();
    AnimeSearchService.searchBySeason(2010, 'winter', function () {
    });
    $httpBackend.flush();
    expect(rootScope.animes[0].title).toEqual(getData[0].title);
  });

  it('デフォルト検索ができること', function () {
    rootScope.season.year = 2010;
    rootScope.season.season = 'winter';
    $httpBackend.expectGET('/api/animes/2010/winter').respond(getData);

    expect(rootScope.animes).toBeUndefined();
    AnimeSearchService.searchBySeason(2010, 'winter', function () {
    });
    $httpBackend.flush();
    expect(rootScope.animes[0].title).toEqual(getData[0].title);
  });

});
