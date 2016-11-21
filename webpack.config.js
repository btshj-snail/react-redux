/**
 * Created by snail on 2016/10/9.
 */
const path = require("path");
const webpack = require("webpack");
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");//提取模块中复用的部分，成为一个公共的js

const autoprefixer = require('autoprefixer');

const commonConfig = {
    resolve: {
        alias: {

        },
        extensions:['','.js','json']
    },
    entry: [
      './src/index.js' //单入口文件
    ],
    output: {
        publicPath:'/build',
        path: path.join(__dirname, 'build/'),  //打包输出的路径
        filename: 'bundle.js'			  //打包后的名字
    },
    // 新添加的module属性
    module: {
        loaders: [
            {test: /\.js$/,
                exclude:["/node_modules/","/third_component/"],
                loader: "babel-loader",query: {
                presets: ['react','es2015']
            }},
            // {test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css')},
            {test: /\.(jpg|png)$/, loader: "url?limit=8192"},
            {test: /\.scss$/, loader: "style!css!sass"},
            {test: /\.less$/, loader: "style!css!less"}
        ]
    },
    plugins: [
        new CommonsChunkPlugin("commons.js")
    ]
};





module.exports = commonConfig;