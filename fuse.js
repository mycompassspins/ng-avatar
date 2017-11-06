const { FuseBox, SassPlugin, CSSPlugin, TypeScriptHelpers, JSONPlugin, HTMLPlugin } = require('fuse-box');

const fuse = FuseBox.init({
	homeDir: 'src',
	sourcemaps: true,
	output: 'build/$name.js',
	plugins: [
		[
			SassPlugin({ outputStyle: 'compressed', sourceMap: true }),
			CSSPlugin()
		],
		TypeScriptHelpers(),
		JSONPlugin(),
		HTMLPlugin({ useDefault: false })
	]
});

// setup development sever
fuse.dev({ port: 3000, httpServer: true });


// bundle vendor
fuse.bundle("app")
	.sourceMaps(true)
	.target('browser')
	.instructions('> app/main.ts')
	.watch()
	.hmr();


// run the factory
fuse.run();
