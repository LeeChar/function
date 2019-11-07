const path = require('path')
const resolve = (...filePath) => path.resolve(__dirname, ...filePath)
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: resolve('./index.js'),
    output: {
        path: resolve('./'),
        filename: 'bundle.[hash:6].js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.mdx$/,
                use: 'mdx-loader'
            }
        ]
    },
    devServer: {
        contentBase: resolve('./index.html'),
        compress:true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve('./index.html')
        })
    ]
}
