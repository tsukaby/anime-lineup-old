// expose our config directly to our application using module.exports
module.exports = {

  TWITTER_AUTH: {
    CONSUMER_KEY: '',
    CONSUMER_SECRET: '',
    CALLBACK_URL: '/api/auth/twitter/callback'
  },

  GOOGLE_AUTH: {
    CLIENT_ID: '',
    CLIENT_SECRET: '',
    CALLBACK_URL: '/api/auth/google/callback'
  },

  FACEBOOK_AUTH: {
    CLIENT_ID: '',
    CLIENT_SECRET: '',
    CALLBACK_URL: '/api/auth/facebook/callback'
  },

  EXPRESS_SESSION_KEY: ''

};