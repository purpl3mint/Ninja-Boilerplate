const gulp = require('gulp')

const {cleanBuild, cleanReport} = require('./gulp/clean')
const pug2html = require('./gulp/pug2html')
const styles = require('./gulp/styles')
const script = require('./gulp/script')
const imageMinify = require('./gulp/imageMinify')
const serve = require('./gulp/serve')
const lighthouse = require('./gulp/lighthouse')

const build = gulp.series(cleanBuild, pug2html, styles, script, imageMinify)

module.exports.start = gulp.series(build)

module.exports.serve = gulp.series(build, serve)

module.exports.lighthouse = gulp.series(cleanReport, lighthouse)