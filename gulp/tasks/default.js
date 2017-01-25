// @file default.js
var gulp = require('gulp');

gulp.task('default', ['build', 'watch','browser-sync'], function () {
    gulp.watch("./*.html", ['bs-reload']);
});
