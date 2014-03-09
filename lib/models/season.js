'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Season Schema
 */
var SeasonSchema = new Schema({
  year: String,
  season: String,
  name: String,
  link: String
});

/**
 * Validations
 */
SeasonSchema.path('season').validate(function (season) {
  return season === 'spring' || season === 'summer' || season === 'autumn' || season === 'winter';
}, 'season must be spring, summer, sutumn or winter');

mongoose.model('Season', SeasonSchema);
