var config = require('./');

module.exports = {
  src: config.sourceDirectory + "/styles/**/*.styl",
  dest: config.publicDirectory + '/styles',
    settings: {
      compress: true
    }
}