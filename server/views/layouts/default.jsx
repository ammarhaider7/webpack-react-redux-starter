const React = require('react');

const DefaultLayout = React.createClass({
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" type="text/css" href={ `${this.props.commonCss}` } />
          <link rel="stylesheet" type="text/css" href={ `${this.props.cssFile}` } />
        </head>
        <body>
        	{this.props.children}
        </body>
      </html>
    );
  }
});

module.exports = DefaultLayout;