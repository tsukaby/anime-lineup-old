'use strict';

var should = require('should'),
    mongoose = require('mongoose'),
    User = mongoose.model('User');

var user;

describe('User Model', function() {
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