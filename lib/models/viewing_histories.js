'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * 視聴履歴スキーマ。
 * @type {Schema}
 */
var ViewingHistorySchema = new Schema({
  userId: String,
  season: String,
  year: Number,
  title: String,
  status: Number //0:切った、1:保留、2:見てる
});

/**
 * Validations
 */
ViewingHistorySchema.path('title').validate(function (str) {
  return str.length >= 1 && str.length <= 100;
}, 'Title must be between 1 and 100');

mongoose.model('ViewingHistory', ViewingHistorySchema);
