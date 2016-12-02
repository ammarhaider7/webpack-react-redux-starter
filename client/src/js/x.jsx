import { printAfterTimeout } from './coffee/a';
import { CjsxComponentX } from './cjsx/x';
import React from 'react';
import ReactDOM from 'react-dom';
import '../css/global.scss';
import '../css/xstyles.css';

const fname = 'Ammar';
const lname = 'Haider';

let printName = (fname, lname) => console.log(`${fname} ${lname}`);

printName(fname, lname);

setTimeout(printAfterTimeout, 1500);
// setTimeout(printAfterTimeout2, 1500);

const CommentBox = React.createClass({
  render() {
    return (
      <div className="commentBox">
        <p>Hello, world! I am a client-side react component on x.</p>
        <CjsxComponentX />
      </div>
    );
  }
});

ReactDOM.render(<CommentBox />,  document.getElementById('content'));