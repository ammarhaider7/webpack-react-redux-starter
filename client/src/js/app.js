import { Router, Route, browserHistory } from 'react-router';
import React from 'react';
import { render } from 'react-dom';
import { Main, counter } from './main.jsx';
import { X } from './x.jsx';
import assets from '../../dist/webpack.assets.json';

counter()

render(
	<Router history={browserHistory}>
		<Route path="/" component={Main} jsFile={assets.bundle.js}/>
		<Route path="/x" component={X} jsFile={assets.xBundle.js}/>
	</Router>
, document.getElementById('content'))