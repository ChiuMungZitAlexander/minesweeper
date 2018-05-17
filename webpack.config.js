const path = require('path');

module.exports = {
	entry: './index.js',
	devtool: 'cheap-module-eval-source-map',
	resolve: {
		modules: [
			path.resolve('./'),
			path.resolve('./node_modules')
		],
		extensions: ['.js']
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'minesweeper.bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	}
};
