import { Router, Route, browserHistory } from 'react-router';
import React from 'react';
import { render } from 'react-dom';
import { Main, counter } from './main.jsx';
import { X } from './x.jsx';

render(
	<Router history={browserHistory}>
		<Route path="/" component={Main}/>
		<Route path="/x" component={X}/>
		<Route path='/y' getComponent={(nextState, cb) => {
			require.ensure([], (require) => {
				cb(null, require('./y/components/y.js').Y)
			})
		}} />
	</Router>
, document.getElementById('content'))

counter()