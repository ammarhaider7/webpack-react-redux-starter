const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const boostrapDir = path.resolve('node_modules/bootstrap-sass/assets');
const pureCssDir = path.resolve('node_modules/purecss');
const srcDir = path.resolve('client/src');
const includeDirs = [srcDir, pureCssDir, boostrapDir];

module.exports = [{
	// SASS
	test: /\.scss$/,
	include: includeDirs,
	loader: ExtractTextPlugin.extract('style', ['css!sass'])

}, {
	// CJSX
	test: /\.cjsx$/,
	include: includeDirs,
	loader: "coffee-jsx-loader"

}, {
	// CSS
	test: /\.css$/,
	include: includeDirs,
	loader: ExtractTextPlugin.extract('style', ['css'])

}, {
	// CoffeeScript
	test: /\.coffee$/,
	include: includeDirs,
	loader: 'coffee-loader'

}, {
	// JSX (react)
	test: /\.jsx?$/,
	include: includeDirs,
	loader: 'babel-loader',
	query: {
		presets: ['es2015', 'react']
	}

}, {
	// JPG and PNG (images)
	test: /\.(jpg|png)$/,
	loaders: [
		// file-loader will then take require statements to image paths and create image files
		'file-loader?name=[path][name].[hash].[ext]',
		// image-webpack will compress the images first
		'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
	],
	include: includeDirs

}, {
	test: /\.svg$/,
	loader: 'file',
	include: includeDirs
}, {
	// WOFF (fonts)
	test: /\.woff2?$/,
	// Inline small woff files and output them below font/.
	// Set mimetype just in case.
	loader: 'url',
	query: {
		name: 'font/[hash].[ext]',
		limit: 5000,
		mimetype: 'application/font-woff'
	},
	include: includeDirs

}, {
	// TTF and EOT (fonts)
	test: /\.ttf$|\.eot$/,
	loader: 'file',
	query: {
		name: 'font/[hash].[ext]'
	},
	include: includeDirs

}];