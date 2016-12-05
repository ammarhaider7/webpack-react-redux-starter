import { printAfterTimeout } from './coffee/a';
import { CjsxComponent } from './cjsx/c';
import React from 'react';
import ReactDOM from 'react-dom';
import '../css/global.scss';
import '../css/style.css';
import '../css/scss/style.scss';
import imgSrc from '../images/radiohead.jpg';
import '../../../node_modules/purecss/build/buttons-core.css';
import '../../../node_modules/purecss/build/base.css';

const fname = 'Hassan';
const lname = 'Haider';

let printName = (fname, lname) => console.log(`${fname} ${lname}`);

printName(fname, lname);

setTimeout(printAfterTimeout, 1500);
// setTimeout(printAfterTimeout2, 1500);

const CommentBox = React.createClass({

  moduleA: null,

  reqEnsureTest() {
    console.log('click on img');
    require.ensure(['./a'], () => {
      this.moduleA = require('./a').default;
      this.moduleA();
    });
  },

  render() {
    return (
      <div className="commentBox">
        <p>Hello world! I am a client-side react component.</p>
        <CjsxComponent />
        <p>This is an image</p>
        <img alt="radiohead" src={imgSrc} onClick={ this.reqEnsureTest } style={{ height: '20%', width: '20%' }} />
        <p>This is a star icon <span className="glyphicon glyphicon-star"></span></p>
        <span className="label" style={{color: 'grey'}}>This is a label</span>
      </div>
    );

  }
});

ReactDOM.render(<CommentBox />,  document.getElementById('content'));