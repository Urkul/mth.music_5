import gulp from 'gulp';
import gulpCssimport from 'gulp-cssimport';
import gcmq from 'gulp-group-css-media-queries';

gulp.task("import", function() {
    gulp.src("css/index.css")
        .pipe(gulpCssimport())
        .pipe(gcmq())
        .pipe(gulp.dest("style/"));
}); 