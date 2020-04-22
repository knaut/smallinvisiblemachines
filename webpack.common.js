const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const babelConfig = require('./babel-config.js')

module.exports = {
	entry: {
		app: './src/app'
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].bundle.js',
		publicPath: '/'
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Daniel A. Anderson - Small Invisible Machines',
			inject: true,
			template: './webpack.template.html',
		})
	],
	module: {
		rules: [
			{
				test: /\.jsx$|.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: babelConfig
				}
			},
			{
				test: /\.(css)$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			}
		]
	}
}