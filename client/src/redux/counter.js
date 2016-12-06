import React from 'react'
import { connect } from 'react-redux'
import { Store } from './store'

let Counter = React.createClass({

  propTypes: {
    counter: React.PropTypes.number
  },

  render() {
    return  <div>
              Counter is {this.props.counter}
              <button onClick={this.reset}>Reset</button>
              <button onClick={this.increment}>Add</button>
            </div>
  },

  increment (e) {
    e.preventDefault()
    Store.dispatch({ type: 'counter:increment' })
  },

  reset (e) {
    e.preventDefault()
    Store.dispatch({ type: 'counter:reset', value: 0 })
  }
})

export default Counter = connect((state) => {
  return state
})(Counter)