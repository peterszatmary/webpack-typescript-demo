var webpack = require('webpack');
module.exports = {
	entry: './src/main.ts',
	output: {
	filename: 'build/bundle.js'
},
	resolve: {
		extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
	},
	// Sourcemaps
	devtool: 'source-map',
	resolve: {
		extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
	},
	// transpilation from typescript to javascript
	module: {
		loaders: [
		{ test: /\.ts$/, loader: 'ts-loader' }
		]
	},
	//minification
	plugins: [
		new webpack.optimize.UglifyJsPlugin()
	],
}