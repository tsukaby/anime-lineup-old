'use strict';

var should = require('should'),
    app = require('../../../server'),
    request = require('supertest');

describe('GET /api/seasons 登録されている全シーズンを取得', function() {
  
  it('JSON配列が取得できること', function(done) {
    request(app)
      .get('/api/seasons')
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

  it('JSONが1件以上取得できること', function(done) {
    request(app)
      .get('/api/seasons')
      .end(function(err, res) {
        if (err) {
          return done(err);
        }
        res.body.length.should.be.above(0);
        done();
      });
  });

});