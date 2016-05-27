var sass = require('gulp-sass');
var globals = require('../../globals');

module.exports = function(gulp) {
  var stream = gulp.src(globals.srcStyles)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(globals.buildStylesDir));

  return stream;
};
