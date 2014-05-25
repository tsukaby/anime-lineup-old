'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * アニメスキーマ。
 *
 * @type {Schema}
 */
var AnimeSchema = new Schema({
  animeId: Number,
  title: String,
  url: String,
  thumbnailDelay: Number,
  season: String,
  year: Number
});

AnimeSchema.path('title').validate(function (str) {
  return str.length >= 1 && str.length <= 100;
}, 'Title must be between 1 and 100');

mongoose.model('Anime', AnimeSchema);
