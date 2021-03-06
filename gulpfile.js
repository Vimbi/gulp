"use strict";

const { src, dest } = require("gulp");
const gulp = require("gulp");
const autoprefixer = require('gulp-autoprefixer');
const cssbeautify = require('gulp-cssbeautify');
const removeComments = require('gulp-strip-css-comments');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
const cssnano = require('gulp-cssnano');
const rigger = require('gulp-rigger');
const uglify = require('gulp-uglify');
const plumber = require('gulp-plumber');
const imagemin = require('gulp-imagemin');
const del = require('del');
const panini = require('panini');
const browsersync = require('browser-sync').create();

let path = {
  build: {
    html: 'dist/',
    js: 'dist/assets/js/',
    css: 'dist/assets/css/',
    images: 'dist/assets/img/'
  },
  src: {
    html: 'src/*.html',
    js: 'src/assets/js/*.js',
    css: 'src/assets/sass/style.scss',
    images: 'src/assets/img/**/*.{jpg,png,svg,gif,ico}'
  },
  watch: {
    html: 'src/**/*.html',
    js: 'src/assets/js/**/*.js',
    css: 'src/assets/sass/**/style.scss',
    images: 'src/assets/img/**/*.{jpg,png,svg,gif,ico}'
  },
  clean: './dist'
};

function html() {
  return src(path.src.html, { base: 'src/' })
    .pipe(plumber())
    .pipe(dest(path.build.html));
};

function css() {
  return src(path.src.css, { base: 'src/assets/sass' })
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cssbeautify())
    .pipe(dest(path.build.css));
}

exports.html = html;
exports.css = css;