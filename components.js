import React from 'react';
import { increaseAction, decreaseAction } from './actions';
// React component
export default class Counter extends React.Component {
  render(){
    const { value, onIncreaseClick, onDecreaseClick } = this.props;
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
        <button onClick={onDecreaseClick}>Decrease</button>
      </div>
    );
  }
}

// Map Redux state to component props
export function mapStateToProps(state)  {
  return {
    value: state.count
  };
}

// Map Redux actions to component props
export function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction),
    onDecreaseClick: () => dispatch(decreaseAction)
  };
}
