'use strict';

describe('Filter: viewingSortFilter', function () {

  // load the filter's module
  beforeEach(module('animeLineupApp'));

  // initialize a new instance of the filter before each test
  var viewingSortFilter;
  beforeEach(inject(function ($filter) {
    viewingSortFilter = $filter('viewingSortFilter');
  }));

  it('引数がundefined、null、空文字列の場合、エラーが発生せず、そのまま値が戻ってくること', function () {
    expect(viewingSortFilter(undefined)).toEqual(undefined);
    expect(viewingSortFilter(null)).toEqual(null);
    expect(viewingSortFilter('')).toEqual('');
  });

  it('引数の配列が1要素の場合、そのまま値が戻ってくること', function () {
    var input = [
      {
        status: 0
      }
    ];

    var expected = [
      {
        status: 0
      }
    ];

    expect(viewingSortFilter(input)).toEqual(expected);
  });

  it('正しくソートされること', function () {
    var input = [
      {
        status: 1
      },
      {
        status: 2
      },
      {
        status: 0
      }
    ];

    var expected = [
      {
        status: 2
      },
      {
        status: 1
      },
      {
        status: 0
      }
    ];

    expect(viewingSortFilter(input)).toEqual(expected);
  });

  it('全て同じ値の場合、ソートされていないこと', function () {
    var input = [
      {
        status: 1
      },
      {
        status: 1
      },
      {
        status: 1
      }
    ];

    var expected = [
      {
        status: 1
      },
      {
        status: 1
      },
      {
        status: 1
      }
    ];

    expect(viewingSortFilter(input)).toEqual(expected);
  });

  it('statusプロパティが無い場合、エラーが出ないこと', function () {
    var input = [
      {
      },
      {
      },
      {
      }
    ];

    var expected = [
      {
      },
      {
      },
      {
      }
    ];

    expect(viewingSortFilter(input)).toEqual(expected);
  });

  it('statusプロパティを持たない要素は配列後部にソートされること', function () {
    var input = [
      {
        status: 1
      },
      {
        status: 2
      },
      {
      }
    ];

    var expected = [
      {
        status: 2
      },
      {
        status: 1
      },
      {
      }
    ];
    expect(viewingSortFilter(input)).toEqual(expected);
  });

});
