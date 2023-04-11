const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack')
const path = require('path')

const mode = process.env.NODE_ENV || 'development'
const prod = mode === 'production'

module.exports = {
  entry: {
    bundle: [path.resolve(__dirname, 'src/main.js')],
  },
  resolve: {
    extensions: ['.mjs', '.js', '.svelte', '.sv'],
    mainFields: ['svelte', 'browser', 'module', 'main'],
    conditionNames: ['svelte']
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
    chunkFilename: '[name].[id].js'
  },
  module: {
    rules: [
      {
        test: /\.sv.*$/,
        // test: /\.svelte$/,
        // test: /\.sv$/,
        use: {
          loader: 'svelte-loader',
          options: {
            // emitCss: true,
            // hotReload: true,
            // dev: !prod
            compilerOptions: {
              dev: !prod
            },
            emitCss: prod,
            hotReload: !prod
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          prod ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader'
        ]
      },
      {
        // required to prevent errors from Svelte on Webpack 5+
        test: /node_modules\/svelte\/.*\.mjs$/,
        resolve: {
          fullySpecified: false
        }
      }
    ]
  },
  mode,
  plugins: [
    new Dotenv(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  devServer: {
    port: 5000
  },
  devtool: prod ? false : 'source-map'
}
