//
var gulp =require('gulp');
//拷贝html文件
gulp.task('copy-html',function(){
	return gulp.src('html/*.html')
	.pipe(gulp.dest('dist'))
	.pipe(connect.reload());

})
//图片整理
gulp.task('images', function(){
	return gulp.src('*.{jpg,png}')
	.pipe(gulp.dest('dist/images'))
	.pipe(connect.reload());

})
//拷贝js文件
gulp.task('scripts',function(){
	return gulp.src(['*.js','!gulpfile.js'])
	.pipe(gulp.dest('dist/js'))
	.pipe(connect.reload());

})
//scss文件
var scss = require('gulp-sass-china');
gulp.task('scss',function(){
	return gulp.src('stylescss/*.scss')
	.pipe(scss())
	.pipe(gulp.dest('dist/css'))
	.pipe(connect.reload());

})
//拷贝data数据
gulp.task('data',function(){
	return gulp.src(['*.json','!package-lock.json','!package.json'])
	.pipe(gulp.dest('dist/data'))
	.pipe(connect.reload());
})
//拷贝php文件
gulp.task('phps',function(){
	return gulp.src('php2/*.php')
	.pipe(gulp.dest('dist/php'))
	.pipe(connect.reload());
})
//执行上述任务
gulp.task('build',['copy-html','images','scripts','scss','data','phps'],function(){
	console.log('编译完成')
})
//gulp监听
gulp.task('watch',function(){
	gulp.watch('html/*.html',['copy-html']);
	gulp.watch('*.{jpg,png}',['images']);
	gulp.watch(['*.js','!gulpfile.js'],['scripts']);
	gulp.watch('stylescss/*.scss',['scss']);
	gulp.watch(['*.json','!package-lock.json','!package.json'],['data']);
	gulp.watch('php2/*.php',['phps']);
})
//启动服务器
var connect = require('gulp-connect');
gulp.task('server',function(){
	connect.server({
		root:'dist',
		port:8888,
		livereload: true
	})
})

gulp.task('default',['watch','server','build']);