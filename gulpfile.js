const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function compGulp() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'))
};

function minImage() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
};

exports.default = gulp.parallel(compGulp, minImage);
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(compGulp));
}