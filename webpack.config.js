const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')

const BUILD_DIR = path.resolve(__dirname, 'build')
const APP_DIR = path.resolve(__dirname, 'src')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

/*// Javascript minification
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const UglifyJsPluginConfig = new UglifyJsPlugin({
  sourceMap: false,
  compress: true,
})*/

const common = {
    entry: APP_DIR + '/index.js',
    output: {
        filename: 'bundle.js',
        path: BUILD_DIR,
        publicPath: '/build/'
    },
    resolve: {
        extensions: ['.js','.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel-loader',
                query: {
                    presets : ['es2015', 'stage-0', 'react']
                }
            },
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: ['babel-loader', 'eslint-loader']
            }
        ]
    }
}

let config
switch(process.env.npm_lifecycle_event) {
    case 'server':
        config = merge(
            common,
            {
              devtool: 'source-map',
            }
        )
        break
    default:
        config = merge(
            common,
            {
                devtool: 'eval-source-map',
                plugins: [HtmlWebpackPluginConfig],
                devServer: {
                    contentBase: path.join(__dirname, 'build'),
                    port: 3000,
                    host: process.env.host
                },
            }
        )
}

module.exports = config