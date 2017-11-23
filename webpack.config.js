var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})


var config = {
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
            }
        ]
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        port: 3000
    },
    plugins: [HtmlWebpackPluginConfig]
};

module.exports = config;