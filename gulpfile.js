//Not using this file anymore
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    browser_sync = require('browser-sync'),
    del = require('del'),
    reload = browser_sync.reload;

// //Clean build folder
gulp.task('build:clean', function () {
    del([
        './build'
    ])
})

//Copy all the files to build folder
gulp.task('build:copy', ['build:clean'], function () {
    gulp.src(['./output/*.js'])
        .pipe(gulp.dest('./build'))
        .pipe(reload({stream:true}));
    gulp.src(['./assets/**'])
        .pipe(gulp.dest('./build/assets'))
        .pipe(reload({stream:true}));
    gulp.src(['./index.html'])
        .pipe(gulp.dest('./build'))
        .pipe(reload({stream:true}));
})

gulp.task('watch', function(){
        gulp.watch(['./output/*.js', './index.html', './assets/**'], ['build:copy']);
});

gulp.task('browser_sync', function(){
    browser_sync({
        server: {
            baseDir: './build'
        }
    })
})

gulp.task('serve', ['build:clean', 'build:copy', 'browser_sync', 'watch']);