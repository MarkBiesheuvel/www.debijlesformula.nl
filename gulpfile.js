const gulp = require('gulp')
const sourcemaps = require('gulp-sourcemaps')
const livereload = require('gulp-livereload')

gulp.task('css', () => {

  // Plugins
  const postcss = require('gulp-postcss')

  // Processors
  const autoprefixer = require('autoprefixer')
  const cssnano = require('cssnano')

  const processors = [
    autoprefixer(),
    cssnano()
  ]

  return gulp.src('./src/css/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'))
    .pipe(livereload())
})

gulp.task('js', () => {

  // Plugins
  const babel = require('gulp-babel')
  const concat = require('gulp-concat')
  const uglify = require('gulp-uglify')

  return gulp.src('./src/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(concat('script.js'))
    // .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'))
    .pipe(livereload())
})

gulp.task('html', () => {
  return gulp.src('./src/html/*.html')
    .pipe(gulp.dest('./dist'))
    .pipe(livereload())
})

gulp.task('img', () => {
  return gulp.src('./src/images/**/*.*')
    .pipe(gulp.dest('./dist/images'))
    .pipe(livereload())
})

gulp.task('build', ['css', 'js', 'html', 'img'])

gulp.task('watch', () => {
  livereload.listen();
  gulp.watch('./src/css/*.css', ['css'])
  gulp.watch('./src/html/*.html', ['html'])
  gulp.watch('./src/js/*.js', ['js'])
  gulp.watch('./src/images/**/*.*', ['img'])
})

gulp.task('default', ['build', 'watch'])
