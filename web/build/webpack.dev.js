// const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const helper = require('./util');

module.exports = merge(common,{
    mode:'development',
    devtool:'inline-source-map',
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
    ],
    output:{
        path:helper.resolve('dist'),
        publicPath:'/',
        filename:'[name].js'
    },
    devServer:{
        port:8099,
        hot:true,
        contentBase:'./dist'
    }
})