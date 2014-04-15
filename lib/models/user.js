'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    crypto = require('crypto');

var findOrCreate = require('mongoose-findorcreate');

/**
 * User Schema
 */
var UserSchema = new Schema({
  twitter: {
    id: String,
    token: String,
    displayName: String,
    username: String
  },
  google: {
    id: String,
    token: String,
    displayName: String,
    username: String
  },
  facebook: {
    id: String,
    token: String,
    displayName: String,
    username: String
  },
});

UserSchema.plugin(findOrCreate);

/**
 * Virtuals
 */

// Basic info to identify the current authenticated user in the app
UserSchema
  .virtual('userInfo')
  .get(function() {
    return {
      'name': this.name,
      'role': this.role,
      'provider': this.provider
    };
  });

module.exports = mongoose.model('User', UserSchema);