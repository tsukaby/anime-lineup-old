'use strict';

module.exports = {
  env: 'production',
  mongo: {
    uri: process.env.MONGOLAB_URI ||
         process.env.MONGOHQ_URL ||
         // 本番環境用のURIを指定
         'mongodb://username:password@hostname:port/dbname'
  }
};