const gulp = require('gulp')
const twig = require('gulp-twig')
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

// Copy All html files
gulp.task('copyHtml', function() {
    gulp.src('src/**.html')
        .pipe(twig())
        .pipe(gulp.dest('dist'))
})

// Copy All twig files
gulp.task('copyTwig', function() {
    gulp.src('src/**.twig')
        .pipe(twig())
        .pipe(gulp.dest('dist'))
})

// { outputStyle: 'compressed' }
// copy font files
gulp.task('fonts', function() {
    gulp.src('src/assets/fonts/**').pipe(gulp.dest('dist/assets/fonts'))
})

// copy all js files
gulp.task('alljs', function() {
        gulp.src('src/assets/js/**').pipe(gulp.dest('dist/assets/js'))
    })
    // copy all js files
gulp.task('css', function() {
    gulp.src('src/assets/css/**').pipe(gulp.dest('dist/assets/css'))
})

// copy all js files
gulp.task('video', function() {
    gulp.src('src/assets/video/**').pipe(gulp.dest('dist/assets/video'))
})

// copy and images min
gulp.task('imagemin', () =>
    gulp
    .src('src/assets/img/**')
    .pipe(gulp.dest('dist/assets/img'))
)

// sass compiler
gulp.task('sass', function() {
    return gulp.src('src/assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/assets/css'));
});

// Gulp Default
gulp.task('default', [
    'copyHtml',
    'copyTwig',
    'fonts',
    'alljs',
    'imagemin',
    'video',
    'css',
    'sass'
])


gulp.task('watch', function() {
    gulp.watch('src/**.twig', ['copyTwig'])
    gulp.watch('src/**.html', ['copyHtml'])
    gulp.watch('src/assets/fonts/**', ['fonts'])
    gulp.watch('src/assets/js/**', ['alljs'])
    gulp.watch('src/assets/video/**', ['video'])
    gulp.watch('src/assets/img/**.html', ['imagemin'])
    gulp.watch('src/assets/css/**', ['css'])
    gulp.watch('src/scss/**/*.scss', ['sass']);
})