const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
					options: {
						presets: [
							'@babel/preset-env',
							'@babel/preset-react'
						]
					}
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