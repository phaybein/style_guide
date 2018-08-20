'use strict';

const gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer');

// Compile Sass
gulp.task('sass', () => {
    gulp.src(['public/scss/**/*.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write('/maps'))
        .pipe(gulp.dest('public/css'))
        .pipe(browserSync.stream())
});


// Watch and Serve
gulp.task('serve', ['sass'], () => {
    browserSync.init({
        server: './public'
    });

    gulp.watch(['public/scss/**/*.scss'], ['sass']);
    gulp.watch(['public/**/*.html']).on('change', browserSync.reload);
});

// Default
gulp.task('default', ['serve']);