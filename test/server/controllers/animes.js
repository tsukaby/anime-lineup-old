'use strict';

var should = require('should');
var app = require('../../../server');
var request = require('supertest');

describe('GET /api/animes/:title タイトルによる検索', function() {
  
  it('JSON配列が取得できること', function(done) {
    request(app)
      .get('/api/animes/aaaaaaaaaaaaaaaaaaaaaaaaaa')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) {
          return done(err);
        }
        res.body.should.be.instanceof(Array);
        done();
      });
  });

  it('タイトルに文字testを含むJSONが1件以上取得できること', function(done) {
    request(app)
      .get('/api/animes/test')
      .end(function(err, res) {
        if (err) {
          return done(err);
        }
        res.body.length.should.be.above(0);
        done();
      });
  });

  it('存在しないタイトルで検索した場合、JSONが0件であること', function(done) {
    request(app)
      .get('/api/animes/aaaaaaaaaaaaaaaaaaaaaaaaaa')
      .end(function(err, res) {
        if (err) {
          return done(err);
        }
        res.body.length.should.equal(0);
        done();
      });
  });
});

describe('GET /api/animes/:year/:season シーズンによる検索', function() {
  
  it('JSON配列が取得できること', function(done) {
    request(app)
      .get('/api/animes/1970/winter')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) {
          return done(err);
        }
        res.body.should.be.instanceof(Array);
        done();
      });
  });

  it('存在する年と季節で検索した場合、JSONが1件以上取得できること', function(done) {
    request(app)
      .get('/api/animes/2010/winter')
      .end(function(err, res) {
        if (err) {
          return done(err);
        }
        res.body.length.should.be.above(0);
        done();
      });
  });

  it('存在しない年と季節で検索した場合、JSONが0件であること', function(done) {
    request(app)
      .get('/api/animes/1970/winter')
      .end(function(err, res) {
        if (err) {
          return done(err);
        }
        res.body.length.should.equal(0);
        done();
      });
  });

  it('年が文字の場合、JSONが0件であること', function(done) {
    request(app)
      .get('/api/animes/1970_/winter')
      .end(function(err, res) {
        if (err) {
          return done(err);
        }
        res.body.length.should.equal(0);
        done();
      });
  });

});