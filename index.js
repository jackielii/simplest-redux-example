import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

// React component
class Counter extends React.Component {
  render(){
    const { count, onClickIncrease } = this.props;
    return (
      <div>
        <span>{this.props.count}</span>
        <button onClick={onClickIncrease}>Increase</button>
      </div>
    );
  }
}

// Action:
const increaseAction = {type: 'increase'};

// Reducer:
function counter(state={count: 0}, action) {
  let count = state.count;
  switch(action.type){
    case 'increase':
      return {count: count+1};
    default:
      return state;
  }
}

// Store:
let store = createStore(counter);

// Component container
class CounterContainer extends React.Component {
  render() {
    // injected by "connect" from react-redux
    const { dispatch, count } = this.props;
    return (
      <Counter count={count} onClickIncrease={()=>dispatch(increaseAction)} />
    )
  }
}

// connect redux
let App = connect(state => state)(CounterContainer);

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.getElementById('root')
);
