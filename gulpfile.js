var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    rigger = require('gulp-rigger'),
    cssmin = require('gulp-minify-css');

gulp.task('html', function () {
   return gulp.src('src/*.html')
         .pipe(rigger())
         .pipe(gulp.dest('dist/'));
});

gulp.task('css', function () {
   return gulp.src('src/css/*.css')
           .pipe(prefixer())
           .pipe(cssmin())
           .pipe(gulp.dest('./dist/css/'));
});

gulp.task('images', function () {
   return gulp.src('src/images/*/*')
   		.pipe(gulp.dest('./dist/images'));
});

gulp.task('watch', function(){
    watch('src/*.html', gulp.series('html'));
    watch('src/css/*.css', gulp.series('css'));
    watch('src/images/*/*', gulp.series('images'));
});

gulp.task('default', gulp.series('html', 'css', 'images'));