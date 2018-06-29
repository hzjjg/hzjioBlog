// const webapck = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common');
const helper = require('./util');

module.exports = merge(common,{
    mode:'production',
    plugins:[
        new UglifyJsPlugin(),
        new CleanWebpackPlugin(['dist']),

    ],
    output:{
        path:helper.resolve('dist'),
        publicPath:'./',
        filename:'[name].[hash:8].js'
    }
})