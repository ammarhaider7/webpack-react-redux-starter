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
	use: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: ['css-loader, sass-loader']})

}, {
	// CJSX
	test: /\.cjsx$/,
	include: includeDirs,
	use: "coffee-jsx-loader"

}, {
	// CSS
	test: /\.css$/,
	include: includeDirs,
	use: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader' })

}, {
	// CoffeeScript
	test: /\.coffee$/,
	include: includeDirs,
	use: 'coffee-loader'

}, {
	// JSX (react)
	test: /\.jsx?$/,
	include: includeDirs,
	use: 'babel-loader',
	options: {
		presets: ['es2015', 'react']
	}

}, {
	// JPG and PNG (images)
	test: /\.(jpg|png)$/,
	use: [
		// file-loader will then take require statements to image paths and create image files
		'file-loader?name=[path][name].[hash].[ext]',
		// image-webpack will compress the images first
		'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
	],
	include: includeDirs

}, {
	test: /\.svg$/,
	use: 'file-loader',
	include: includeDirs
}, {
	// WOFF (fonts)
	test: /\.woff2?$/,
	// Inline small woff files and output them below font/.
	// Set mimetype just in case.
	use: 'url-loader',
	options: {
		name: 'font/[hash].[ext]',
		limit: 5000,
		mimetype: 'application/font-woff'
	},
	include: includeDirs

}, {
	// TTF and EOT (fonts)
	test: /\.ttf$|\.eot$/,
	use: 'file-loader',
	options: {
		name: 'font/[hash].[ext]'
	},
	include: includeDirs

}];