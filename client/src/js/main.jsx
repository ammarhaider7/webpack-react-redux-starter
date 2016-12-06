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
import { Provider } from 'react-redux';

undefined = 'blag'

Retop.something(() => {
  eat()
})

React.render(<Provider store={Store}>
  {() => <App />}
</Provider>, document.getElementById('container'))

const fname = 'Hassan';
const lname = 'Haider';

let printName = (fname, lname) => console.log(`${fname} ${lname}`);

printName(fname, lname);

setTimeout(printAfterTimeout, 1500);

const CommentBox = React.createClass({

  moduleA: null,

  getInitialState() {
    return {
      content: null
    }
  },

  reqEnsureTest() {
    require.ensure(['./a'], () => {
      this.moduleA = require('./a').default();
      this.setState({
        content: this.moduleA.content
      })
    });
  },

  render() {

    let reqEnsContent;
    if (this.state.content != null) reqEnsContent = <p>{ this.state.content }</p>;

    return (
      <div className="commentBox">
        <p>Hello world! I am a client-side react component.</p>
        <CjsxComponent />
        <p>This is an image</p>
        { reqEnsContent }
        <img alt="radiohead" src={imgSrc} onClick={ this.reqEnsureTest } style={{ height: '20%', width: '20%' }} />
        <p>This is a star icon <span className="glyphicon glyphicon-star"></span></p>
        <span className="label" style={{color: 'grey'}}>This is a label</span>
      </div>
    );

  }
});

ReactDOM.render(<CommentBox />,  document.getElementById('content'));