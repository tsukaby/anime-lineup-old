'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * ユーザスキーマ。
 * @type {Schema}
 */
var UserSchema = new Schema({
  name: String,
  email: String,
  username: String,
  provider: String,
  twitter: {},
  google: {},
  facebook: {}
});

/**
 * Virtuals
 */
// Basic info to identify the current authenticated user in the app
UserSchema
  .virtual('userInfo')
  .get(function () {
    return {
      'name': this.name,
      'role': this.role,
      'provider': this.provider
    };
  });

module.exports = mongoose.model('User', UserSchema);