var babel = require('gulp-babel');
var globals = require('../../globals');

module.export = function(gulp) {
  var stream = gulp.src(globals.srcScripts)
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest(globals.buildDir));

  return stream;
};
