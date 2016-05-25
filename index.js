import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

// Presentational (pure) Component
const Counter = ({value, increaseAction}) => (
  <div>
    <span>{value}</span>
    <button onClick={increaseAction}>Increase</button>
  </div>
)

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  increaseAction: PropTypes.func.isRequired
}

// Action Creator
const increaseAction = () => ({
  type: 'increase' 
})

// Reducer
function counter(state = { count: 0 }, action) {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    default:
      return state
  }
}

// Store
const store = createStore(counter)

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.count
  }
}

// Container (connected) Component
const App = connect(
  mapStateToProps,
  { increaseAction } // Map action creators to component props by name
)(Counter)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
