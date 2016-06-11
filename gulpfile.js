// Load plugins
var gulp = require('gulp'),
clean = require('gulp-clean'),
rename = require('gulp-rename'),
minifycss = require('gulp-minify-css'),
notify = require('gulp-notify'),
uglify = require('gulp-uglify'),
sass = require('gulp-sass'),
watch = require('gulp-watch'),
zip = require('gulp-zip'),
gutil = require('gulp-util'),
shell = require('gulp-shell');

gulp.task('default', ['compile']);
gulp.task('compile', ['sass', 'js', 'deploy']);

//cq/aem component styles
gulp.task('sass', function() {
	gulp.src('scss/main.scss')
		.pipe(
			sass({
				outputStyle : 'compact'
			})
		)
		.pipe(gulp.dest('cqwebsample/package/jcr_root/etc/designs/cqwebsample/clientlibs/themes'));
});

//copy images from HTML to clientlibs; exclude the dummy image files
gulp.task('assets', function() {
	gulp.src(['../../HTML/html/images/**','!../../HTML/html/images/dummy/','!../../HTML/html/images/dummy/**'])
	.pipe(gulp.dest('cqwebsample/package/jcr_root/etc/designs/cqwebsample/clientlibs/images'));
});

//All changes to the styles and css files are located at HTML\assets\scss folder.
gulp.task('js', function() {
	gulp.src(['js/*.js','node_modules/jquery/dist/jquery.min.js', 'node_modules/jquery/dist/jquery.min.map'])
	.pipe(gulp.dest('cqwebsample/package/jcr_root/etc/designs/cqwebsample/clientlibs/source'));
});

//compile using maven build; see parent's build.xml and pom.xml
gulp.task('deploy', shell.task([
	'echo Maven Build and Compile...',
	'ant package.deploy'
]));

gulp.task('build', shell.task([ 
	'echo Maven Build and Compile...',
	'ant package.build' 
]));

// compile using maven build; see parent's build.xml and pom.xml
gulp.task('quick', shell.task([
	'echo Maven Build and Compile...',
	'ant package.quick'
]));

//CURL version atleast v7.44 needed -- optional upload, NOT USE, FOR REFERENCE ONLY
gulp.task('upload', shell.task([
	'echo UPLOAD PACKAGE...',
	'curl -X POST -u admin:admin -F package=@"package/cqwebsample-main.zip" -F force=true http://localhost:4502/crx/packmgr/service/.json/?cmd=upload -sS -v',
	'curl -X POST -u admin:admin http://localhost:4502/crx/packmgr/service/.json/etc/packages/cqwebsample/cqwebsample-main.zip?cmd=install -sS -v'
]));