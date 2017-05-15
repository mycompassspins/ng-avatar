/**
 * Created by Justin on 4/21/17.
 */

'use strict';

/**
 * Load Gulp config and all tasks
 */
(function()
{
	let gulpMain = require('gulp'),
		gulp = require('gulp-help')(gulpMain),
		loadTasks = require('./tasks/load');

	// Load all tasks from the tasks directory, passing the gulp object to each one
	loadTasks(`${__dirname}/tasks`);

})();
