const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function dependenciesCSS() {
    return gulp.src('./node_modules/font-awesome/css/font-awesome.css')
        .pipe(uglifycss({ 'uglyComments': false }))
        .pipe(concat('dependencies.min.css'))
        .pipe(gulp.dest('./build/assets/css'))
}

function dependenciesFonts() {
    return gulp.src('./node_modules/font-awesome/fonts/*.*')
        .pipe(gulp.dest('./build/assets/fonts'))
}

module.exports = {
    dependenciesCSS,
    dependenciesFonts
}
