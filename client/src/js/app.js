import { Router, Route, browserHistory } from 'react-router';
import React from 'react';
import { render } from 'react-dom';
import { Main, counter } from './main.js';
import { X } from './x.js';

counter()

render(
	<Router history={browserHistory}>
		<Route path="/" component={Main}/>
		<Route path="/x" component={X}/>
	</Router>
)