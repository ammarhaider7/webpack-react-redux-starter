module.exports = {
  path: '/y',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/y.js'))
    })
  }
}