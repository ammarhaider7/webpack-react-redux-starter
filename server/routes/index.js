var express = require('express');
var router = express.Router();
const assets = require('../../client/dist/webpack.assets.json');
const commonJs = assets.common.js;
const commonCss = assets.common.css;

/* GET home page. */
router.get('/', (req, res) => {
	res.render('index', { 
		title: 'Webpack-app',
		name: 'I am a server-side react component',
		env: req.app.locals.am_env,
		commonJs,
		commonCss
	});
});

module.exports = router;