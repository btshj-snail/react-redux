/**
 * Created by snail on 2016/10/9.
 * 开发配置
 */
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");//将css抽取为一个独立的css文件，并且以link的方式写入界面中
const commonConfig = require('./webpack.config.js');

commonConfig.module.loaders.push({test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css')});

commonConfig.plugins.push(new ExtractTextPlugin("/css/[name].css"))

module.exports = commonConfig;