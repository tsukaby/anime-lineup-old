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

  EXPRESS_SESSION_KEY: ''

};