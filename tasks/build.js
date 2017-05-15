/**
 * Created by justin on 5/15/17.
 */

module.exports = (gulp) =>
{
	let sourcemaps = require('gulp-sourcemaps'),
		exec = require('child_process').exec,
		runSequence = require('run-sequence'),
		chalk = require('chalk');

	gulp.task('build', (cb) =>
	{
		exec('tsc --version', (err, stdout, stderr) =>
		{
			console.log(chalk.green("Typescript " + stdout));
		});

		gulp.src('src/app/avatar/index.d.ts')
			.pipe(gulp.dest('dist'));

		gulp.src('README.md')
			.pipe(gulp.dest('dist'));

		return exec('tsc -p src/tsconfig.npm.json', (err, stdout, stderr) =>
		{
			if (err) console.log(stderr);
			console.log(chalk.green("Done Compiling TS " + stdout));
			cb(err);
		})
	});
};

