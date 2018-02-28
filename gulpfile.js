var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

//Sample Task For Checking Purpose Only.
gulp.task('sample',()=>{
console.log("Hi !! I am inside the sample gulp task");
});

//Task for converting Single SCSS file to CSS using gulp-sass.
gulp.task('sample',()=>{
	return gulp.src('app/scss/style.scss')
	.pipe(sass())
	.pipe(gulp.dest('app/css'))
});

//Task for converting multiple SCSS file to multiple CSS in single run.
 gulp.task('sass',()=>{
	return (gulp.src('app/scss/**/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('app/css')))
});

//Task for Watching any changes in the below type of files.
gulp.task('watch',()=>{
	gulp.watch('app/scss/**/*.scss',['browserSASS']);
});

//Task for spin up a server using browser sync.
gulp.task('browserSync',()=>{
	browserSync.init({
		server:{
			basedir:'app'
		},
	})
});

//Task for converting multiple sass into multiple CSS in single run along with browserSync task.
gulp.task('browserSASS',()=>{
	return gulp.src('app/scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({
			stream:true
		}))
});

//Task for Watching any changes in the below type of files and before that run browserSync.
gulp.task('watch',['browserSync'],()=>{
	gulp.watch('app/scss/**/*.scss',['browserSASS']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js',browserSync.reload);
});