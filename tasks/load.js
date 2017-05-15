/**
 * Created by Justin on 9/2/16.
 */

let fs = require('fs'),
	gulp = require('gulp');

const tasksPath = `${__dirname}/tasks`;

/**
 * Read tasks directory and load Gulp tasks
 * @param root
 */
module.exports = function _loadTasks(root)
{
	try
	{
		// Read /tasks directory
		fs.readdirSync(root).forEach((rootItem) =>
		{
			if (rootItem !== 'load.js')
			{
				// If item is a directory, call _loadTasks with the new directory
				if (_isDirectory(`${root}/${rootItem}`))
				{
					_loadTasks(`${root}/${rootItem}`);
				}
				// Otherwise, initialize gulp task
				else
				{
					/**
					 * Build relative path for require() call
					 * If tasksPath is `/Users/Justin/Project/tasks/sub-directory/task.js`,
					 * we only need `sub-directory/task.js`.
					 * Thus, our require() call looks like this: `require('./tasks/sub-directory/task.js')`
					 */
					let path = `${root}/${rootItem}`.replace(`${tasksPath}/`, '');
					require(path)(gulp);
				}
			}
		});
	}
	catch(e)
	{
		console.log('Error loading Gulp tasks: ', e);
	}
};

function _isDirectory(item)
{
	return fs.lstatSync(item).isDirectory();
}
