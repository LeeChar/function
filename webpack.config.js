const path = require('path');
const resolve = (...filePath) => path.resolve(__dirname, ...filePath);
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: resolve('./index.js'),
  output: {
    path: resolve('./'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader', 'eslint-loader'],
        exclude: [resolve('node_modules'), resolve('./data.js')]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    contentBase: resolve('./index.html'),
    compress: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('./index.html')
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        noparse: /jquery/,
        eslint: {
          configFile: resolve('.eslintrc.json'),
          failOnWarning: true,
          failOnError: false,
          cache: true
        }
      }
    })
  ]
};
