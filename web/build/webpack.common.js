const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const helper = require('./util');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: './src/main.ts'
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                include: [helper.resolve('src/style.scss')],
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.ejs$/,
                use: 'ejs-loader',
            },
            {
                test: /\.jade$/,
                use: 'pug-loader'
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: 'file-loader'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: "url-loader?limit=10000&minetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: "file-loader"
            }
        ]
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json']
    },

    plugins: [
        new HtmlWebpackPlugin({
            hash:true,
            template:'./src/index.html'
        }),
        new ExtractTextPlugin('style.[hash:8].css'),
        new webpack.NamedModulesPlugin(),
        // new webpack.optimize.SplitChunksPlugin()
    ],
}