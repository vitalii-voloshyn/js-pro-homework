'use strict';

const { series, src, dest, watch } = require('gulp');
const concat = require('gulp-concat');
const inject = require('gulp-inject');
const sass = require('gulp-sass');

function copyTask(cb) {
  console.log('copyTask is working!!!');
  src('src/**/*.html')
    .pipe(dest('dist/'))

  cb();
}

function concatFile() {
  console.log('concatFile is working!!!');
  return src('src/js/*.js')
    .pipe(concat('all.js'))
    .pipe(dest('dist/'))
}

function compileFile(cb) {
  src('src/assets/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('dist/css'))
  cb();
}

function injectTask(cb) {
  console.log('it is working!');
  src('dist/index.html')
    .pipe(inject(src(['dist/**/*.js', 'dist/**/*.css'], { read: false })))
    .pipe(dest('dist'))
  cb();
}

function devTask() {
  watch('src/**/*.scss', function (cb) {
    src('src/assets/scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(dest('dist/css'))
    cb();
  })
  watch('src/**/*.html', function (cb) {
    src('src/**/*.html')
      .pipe(dest('dist'))
    cb()
  })

}

module.exports.build = series(copyTask, concatFile, compileFile, injectTask);
module.exports.dev = devTask;
