const gulp = require('gulp'), 
 less = require('gulp-less'),  
 watch = require('gulp-watch'),
 minifyCSS = require('gulp-minify-css'),  
 rename = require('gulp-rename'),  
 header = require('gulp-header'),  
 pkg = require('./package.json');

var banner = ['/**',  
  ' * <%= pkg.name %> v<%= pkg.version %>',
  ' * <%= pkg.description %>',
  ' * <%= pkg.author.name %> <<%= pkg.author.email %>>',
  ' */',
  ''].join('\n');


gulp.task('compile-less', function() {  
  gulp.src('./src/less/main.less')
    .pipe(less())
    .pipe(header(banner, {pkg: pkg}))
    .pipe(gulp.dest('./public/css'));
});


gulp.task('watch-less', function() {  
  gulp.watch('./src/less/**/*.less' , ['compile-less']);
});

gulp.task('minify-css', function() {  
  gulp.src('./public/css/main.css')
    .pipe(minifyCSS())
    .pipe(header(banner, {pkg: pkg}))
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest( './public/css' ));
});

gulp.task('default', ['compile-less', 'watch-less']);
gulp.task('build', ['minify-css']);  
