// expose our config directly to our application using module.exports
module.exports = {

  TWITTER_AUTH: {
    CONSUMER_KEY: 'test',
    CONSUMER_SECRET: 'test',
    CALLBACK_URL: '/api/auth/twitter/callback'
  },

  GOOGLE_AUTH: {
    CLIENT_ID: 'test',
    CLIENT_SECRET: 'test',
    CALLBACK_URL: '/api/auth/google/callback'
  },

  FACEBOOK_AUTH: {
    CLIENT_ID: 'test',
    CLIENT_SECRET: 'test',
    CALLBACK_URL: '/api/auth/facebook/callback'
  },

  EXPRESS_SESSION_KEY: 'test'

};
