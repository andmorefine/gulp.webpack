// @file watch.js
var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('../config').watch;

gulp.task('watch', function () {
    // js
    watch(config.js, function () {
        gulp.start(['webpack']);
        gulp.start(['bs-reload']);
    });

    // styl
    watch(config.styl, function () {
        gulp.start(['stylus']);
        gulp.start(['bs-reload']);
    });
});