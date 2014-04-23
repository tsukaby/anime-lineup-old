'use strict';

var should = require('should');
var mongoose = require('mongoose');
var User = mongoose.model('User');

describe('User Model', function() {
  var user;
  before(function(done) {
    user = new User({
    });

    // Clear users before testing
    User.remove().exec();
    done();
  });

  afterEach(function(done) {
    User.remove().exec();
    done();
  });

  it('should begin with no users', function(done) {
    User.find({}, function(err, users) {
      users.should.have.length(0);
      done();
    });
  });

});