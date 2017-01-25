var gulp = require('gulp');
// browser Sync
var browserSync = require('browser-sync');
 
// Static server
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./public/"
        }
    });
});

// Reload all Browsers
gulp.task('bs-reload', function () {
    browserSync.reload();
});
