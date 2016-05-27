var globals = require('../../globals');

module.exports = function(gulp) {
  gulp.watch(globals.srcStyles, ['build-styles']);
};
