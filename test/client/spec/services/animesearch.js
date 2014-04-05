'use strict';

describe('Service: AnimeSearchService', function () {

  // load the service's module
  beforeEach(module('animeLineupApp'));

  // instantiate service
  var $httpBackend;
  var AnimeSearchService;
  var AnimesValue;
  var SeasonConstant;

  beforeEach(inject(function (_$httpBackend_, _AnimeSearchService_, _AnimesValue_, _SeasonConstant_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('api/animes/2014/spring').respond([
      {
        title: 'anime1',
        url: 'http://example.com/anime1',
        thumbnailDelay: 0,
        season: 'spring',
        year: 2014
      }
    ]);
    $httpBackend.expectGET('api/seasons').respond([
      {
        year: '2014',
        season: 'spring',
        name: '2014年 春',
        link: '#/2014/spring/'
      }
    ]);
    AnimeSearchService = _AnimeSearchService_;
    AnimesValue = _AnimesValue_;
    SeasonConstant = _SeasonConstant_;
  }));

  it('AnimeSearchServiceが定義されていること', function () {
    expect(!!AnimeSearchService).toBe(true);
  });

  it('タイトルによる検索ができること', function () {
    //TODO httpによる検索のテスト
  });

  it('年と期による検索ができること', function () {
    //TODO httpによる検索のテスト
  });

  it('デフォルト検索ができること', function () {
    //TODO httpによる検索のテスト
  });

});
