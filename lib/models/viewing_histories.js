'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * 視聴履歴スキーマ。
 * @type {Schema}
 */
var ViewingHistorySchema = new Schema({
  userId: String,
  animeId: Number,
  status: Number //0:切った、1:保留、2:見てる
});

/**
 * Validations
 */
ViewingHistorySchema.path('userId').validate(function (str) {
  return !!str;
}, 'UserId must be not null');

mongoose.model('ViewingHistory', ViewingHistorySchema);
