var gulp = require('gulp');
var stylus = require('gulp-stylus');
var nib = require('nib');
var minifyCSS = require('gulp-minify-css');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();


var config = {
  styles: {
  	//Ruta de archivo generado entrada
    main: './src/stylus/style.styl',
    //Ruta de archivos de desarrollo
    watch: './src/stylus/**/*.styl',
    //Ruta de salida de archivos
    output: './public/css'
  },
  scripts: {
  	main: './src/js/main.js',
  	watch: './src/js/**/*.js',
  	output: './public/js'
  },
  files: {
    watch: './**/*.html'
  }
}

//Server
gulp.task('serve', function () {
   browserSync.init({
       server: {
           baseDir: './'
        }
   })
})



gulp.task('build:css', function() {
  gulp.src(config.styles.main)
    .pipe(stylus({
      use: nib(),
      'include css': true
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest(config.styles.output))
    .pipe(browserSync.stream())
});

//se debe instalar el modulo de browserify
gulp.task('build:js', function() {
  return browserify(config.scripts.main)
    .bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(config.scripts.output));
});


gulp.task('watch', function() {
  gulp.watch(config.styles.watch, ['build:css']);
  gulp.watch(config.scripts.watch, ['build:js']);
  gulp.watch(config.files.watch).on('change', browserSync.reload);
});


gulp.task('build', ['build:css', 'build:js']);

gulp.task('default', ['watch', 'build', 'serve']);






