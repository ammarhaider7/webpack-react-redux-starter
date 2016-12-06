import { createStore } from 'redux'

const initial = {
  counter: 0
}

const Store = createStore((state = initial, action) => {
  switch (action.type) {
  case 'counter:increment':
    return { ...state, counter: state.counter + 1 }

  case 'counter:set':
    const { value } = action
    return { ...state, counter: value }
  }
})