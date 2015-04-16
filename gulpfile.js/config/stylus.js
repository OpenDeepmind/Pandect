var config = require('./');

module.exports = {
  //src: config.sourceDirectory + "/styles/**/*.styl",
  src: config.sourceDirectory + "/styles/style.styl", // Only compile the entry point, other files will be imported.
  dest: config.publicDirectory + '/styles',
    settings: {
      compress: true
    }
}