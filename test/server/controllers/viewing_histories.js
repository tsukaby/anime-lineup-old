'use strict';

var should = require('should');
var app = require('../../../server');
var request = require('supertest');
var passportStub = require('passport-stub');
passportStub.install(app);
var req = request(app);

describe('GET /api/viewing_histories/:userId/:year/:season 視聴履歴の取得(未ログイン)', function () {

  it('未認証の場合302で転送されること', function (done) {
    request(app)
      .get('/api/viewing_histories/test001/2010/winter')
      .expect(302)
      .expect('Location', '/')
      .end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
  });

  it('未認証の場合302で転送されること', function (done) {
    request(app)
      .post('/api/viewing_histories')
      .expect(302)
      .expect('Location', '/')
      .end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
  });
});

describe('GET /api/viewing_histories/:userId/:year/:season 視聴履歴の取得(ログイン済み)', function () {


  it('JSON配列が取得できること', function (done) {
    passportStub.login({username: 'john.doe'});
    req.get('/api/viewing_histories/test001/2010/winter')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        if (err) {
          return done(err);
        }
        res.body.should.be.instanceof(Array);
        done();
      });
  });

  it('JSONが1件以上取得できること', function (done) {
    passportStub.login({username: 'john.doe'});
    req.get('/api/viewing_histories/test001/2010/winter')
      .end(function (err, res) {
        if (err) {
          return done(err);
        }
        res.body.length.should.be.above(0);
        done();
      });
  });
});