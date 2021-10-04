const gulp = require('gulp')

module.exports = function normalize(cb) {
  return gulp.src('node_modules/normalize.css/normalize.css')
    .pipe(gulp.dest('build/css'))
}