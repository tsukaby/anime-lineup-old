'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * シーズンスキーマ。
 *
 * @type {Schema}
 */
var SeasonSchema = new Schema({
  year: String,
  season: String,
  name: String
});

SeasonSchema.path('season').validate(function (season) {
  return season === 'spring' || season === 'summer' || season === 'autumn' || season === 'winter';
}, 'season must be spring, summer, autumn or winter');

mongoose.model('Season', SeasonSchema);
