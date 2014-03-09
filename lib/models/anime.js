'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Anime Schema
 */
var AnimeSchema = new Schema({
  title: String,
  url: String,
  thumbnailDelay: Number,
  snsPoint: Number,
  season: String,
  year: Number
});

/**
 * Validations
 */
AnimeSchema.path('title').validate(function (str) {
  return str.length >= 1 && str.length <= 100;
}, 'Title must be between 1 and 100');

mongoose.model('Anime', AnimeSchema);
