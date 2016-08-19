"use strict";

const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpackFactory = require('./webpack.factory.config');
const raw_entries = require('./webpack.entries');
const path = require('path');

// Append dev server items to entries array items
let entries, key, value, wdsLocal;

wdsLocal = 'webpack-dev-server/client?http://localhost:8080';
entries = {};

for (key in raw_entries) {
    value = raw_entries[key];
    entries[key] = [value, wdsLocal];
}

// console.log('entries');
// console.log(entries);

module.exports = webpackFactory({

    env: 'development',
    entries: entries,
    output: {
        path: path.resolve('client/public'),
        filename: '[name].js',
        publicPath: '/public/'
    },
    devtool: 'eval-source-map',
    extraProps: {
        devServer: {
            contentBase: path.resolve('./client/src'),
            hot: true
        },
        debug: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("[name].css")
    ]

});