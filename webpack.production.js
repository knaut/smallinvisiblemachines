const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	performance: {
		hints: 'warning'
	},
	output: {
		path: path.resolve(__dirname, 'static'),
		filename: '[name].bundle.js',
		publicPath: '/'
	}
})