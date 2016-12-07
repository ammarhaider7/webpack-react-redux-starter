const webpack = require('webpack');
const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');
const srcDir = path.resolve('client/src');
const loaders = require('./webpack.default-loaders');

module.exports = (options) => {

    const context = srcDir;
    const entry = options.entries;
    const target = 'web';
    const devtool = options.devtool;
    const output = options.output;
    // const imgDir = path.resolve('client/src/images');
    const module = { rules: loaders };
    const resolve = {
        // you can now require('file') instead of require('file.coffee')
        extensions: ['.js', '.json', '.jsx'],
    };
    const plugins = [
        new webpack.optimize.CommonsChunkPlugin({
            minChunks: 2, 
            name: 'common'
        }),
        new AssetsPlugin({
            path: path.resolve('client/dist'),
            filename: 'webpack.assets.json',
            prettyPrint: true,
            update: true
        })
    ].concat(options.plugins);

    // Extra props to assign to final config object
    const extraProps = options.extraProps;

    // Final config object
    const config = Object.assign({

        context,
        entry,
        output,
        module,
        resolve,
        plugins,
        devtool,
        target
    
    }, extraProps);

    return config;

};