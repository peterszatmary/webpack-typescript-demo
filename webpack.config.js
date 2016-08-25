var webpack = require('webpack');
module.exports = {
	entry: './src/main.ts',
	output: {
	filename: 'build/bundle.js'
},
	resolve: {
		extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
	},
	// sourcemap
	devtool: 'source-map',
	resolve: {
		extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
	},
	// transpiling from typescript to javascript
	module: {
		loaders: [
		{ test: /\.ts$/, loader: 'ts-loader' }
		]
	},
	//minifying
	plugins: [
		new webpack.optimize.UglifyJsPlugin()
	],
}