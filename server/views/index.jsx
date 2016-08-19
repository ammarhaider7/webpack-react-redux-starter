var React = require('react');	
var DefaultLayout = require('./layouts/default');

var HelloMessage = React.createClass({

	render() {
		return (
			<DefaultLayout {...this.props}>
				<div>Hello, Daarth Haider!! {this.props.name}</div>
				<div id="content"></div>
				<script src={ `${this.props.commonJs}` }></script>
				<script src={ `${this.props.jsFile}` }></script>
			</DefaultLayout>
		);
  	}

});

module.exports = HelloMessage;