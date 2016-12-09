import React from 'react';
import ReactDOM from 'react-dom';
import RxComponent from './rxComponent.js'
import '../css/global.scss';
import '../css/xstyles.css';

const fname = 'Ammar';
const lname = 'Haider';

let printName = (fname, lname) => console.log(`${fname} ${lname}`);

printName(fname, lname);

const Xcomponent = React.createClass({
  render() {
    return (
      <div className="Xcomponent">
        <p>Hello, world! I am a client-side react component on x.</p>
        <RxComponent />
      </div>
    );
  }
});

ReactDOM.render(<Xcomponent />,  document.getElementById('content'));