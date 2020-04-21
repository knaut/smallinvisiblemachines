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
					options: {
						presets: [
							'@babel/preset-env',
							'@babel/preset-react'
						],
						plugins: [
							'babel-plugin-styled-components'
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