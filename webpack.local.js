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
	devServer: {
		contentBase: path.join(__dirname, 'build'),
		compress: true,
		port: 3000,
		hot: true,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Headers': '*'
		},
		historyApiFallback: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
})