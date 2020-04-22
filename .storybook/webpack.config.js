const babelConfig = require('../babel-config.js')

module.exports = {
	plugins: [

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