import React from 'react';
import '../css/global.scss';
import '../css/xstyles.css';

const fname = 'Ammar';
const lname = 'Haider';

let printName = (fname, lname) => console.log(`${fname} ${lname}`);

printName(fname, lname);

const X = React.createClass({

	propTypes: {
		jsFile: React.PropTypes.string
	},

	render() {
		return (
			<div className="commentBox">
				<p>Hello, world! I am a client-side react component on x.</p>
			</div>
		);
  }
});

export {
	X
}