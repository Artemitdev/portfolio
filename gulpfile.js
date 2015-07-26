var gulp = require('gulp'),
	browserSync = require('browser-sync');

//Запуск сервера
gulp.task('server', function () {
	browserSync({
		port: 3000,
		server: {
			baseDir: 'src'
		}
	});
});

//слежка
gulp.task('watch', function() {
	gulp.watch([
		'src/**/*'
		//'src/*,html',
		//'src/js/**/*.js',
		//'css/css/**/*.css'
		]).on('change', browserSync.reload);
		});
gulp.task('default', ['server', 'watch']);