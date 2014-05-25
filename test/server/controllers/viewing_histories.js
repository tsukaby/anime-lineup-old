'use strict';

var should = require('should');
var app = require('../../../server');
var request = require('supertest');
var mongoose = require('mongoose');
var ViewingHistory = mongoose.model('ViewingHistory');
var passportStub = require('passport-stub');
passportStub.install(app);
var req = request(app);


describe('POST /api/viewing_histories 視聴状態の保存取得', function () {

  it('未認証の場合302で転送されること', function (done) {
    passportStub.logout();
    req.post('/api/viewing_histories')
      .expect(302)
      .expect('Location', '/')
      .end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
  });

  it('データが登録できること', function (done) {
    var input = {userId: 'test001', animeId:1, status: 1};
    passportStub.login({username: 'test001'});
    req.post('/api/viewing_histories')
      .send(input)
      .expect(200)
      .end(function (err, res) {
        if (err) {
          return done(err);
        }
        ViewingHistory.find(input, function (err, viewingHistory) {
          if (err) {
            return done(err);
          }
          viewingHistory.length.should.equal(1);
        });
        done();
      });
  });

  it('同一データが重複して登録されないこと', function (done) {
    var input = {userId: 'test001', animeId:1, status: 1};
    passportStub.login({username: 'test001'});
    req.post('/api/viewing_histories')
      .send(input)
      .expect(200)
      .end(function (err, res) {
        if (err) {
          return done(err);
        }
        req.post('/api/viewing_histories')
          .send(input)
          .expect(200)
          .end(function (err, res) {
            if (err) {
              return done(err);
            }
            ViewingHistory.find(input, function (err, viewingHistory) {
              if (err) {
                return done(err);
              }
              //同一データを２度送信し、検索によって１件であることを確認する
              viewingHistory.length.should.equal(1);
            });
            done();

          });
      });
  });

  it('データが更新されること', function (done) {
    var input = {userId: 'test001', animeId:1, status: 1};
    passportStub.login({username: 'test001'});
    req.post('/api/viewing_histories')
      .send(input)
      .expect(200)
      .end(function (err, res) {
        if (err) {
          return done(err);
        }

        //2度目の送信ではstatusを2にする(更新する)
        input.status = 2;
        req.post('/api/viewing_histories')
          .send(input)
          .expect(200)
          .end(function (err, res) {
            if (err) {
              return done(err);
            }
            ViewingHistory.find(input, function (err, viewingHistory) {
              if (err) {
                return done(err);
              }
              //２度目の送信によってstatusが2になっていることを確認する
              viewingHistory[0].status.should.equal(2);
            });
            done();

          });
      });
  });
});

