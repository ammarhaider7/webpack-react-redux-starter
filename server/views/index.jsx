var React = require('react');	
var DefaultLayout = require('./layouts/default');

var HelloMessage = React.createClass({

	render() {

		// server change reload
		const dev = this.props.env === 'dev';
		let reloadJs = null;
		if (dev) {
			reloadJs = <script src='/public/reload-client.js'></script>
		}

		return (
			<DefaultLayout {...this.props}>
				<div>Hello, Ammar Haider, {this.props.name}</div>
				<div id="content"></div>
				<script src={ `${this.props.commonJs}` }></script>
				<script src={ `${this.props.jsFile}` }></script>
				{reloadJs}
			</DefaultLayout>
		);
  	}

});

module.exports = HelloMessage;