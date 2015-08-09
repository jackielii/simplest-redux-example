var React = require('react');
var Redux = require('redux');
var ReactRedux = require('react-redux');
var createStore = Redux.createStore;
var Provider = ReactRedux.Provider;
var connect = ReactRedux.connect;

// React component
var Counter = React.createClass( {
  render: function() {
    var value = this.props.value;
    var onIncreaseClick = this.props.onIncreaseClick;
    return (
      React.createElement("div", null, 
        React.createElement("span", null, value), 
        React.createElement("button", {onClick: onIncreaseClick}, "Increase")
      )
    );
  }
});

// Action:
var increaseAction = {type: 'increase'};

// Reducer:
function counter(state, action) {
  if (typeof state === 'undefined') {
    state = {count: 0};
  }
  var count = state.count;
  switch(action.type){
    case 'increase':
      return {count: count+1};
    default:
      return state;
  }
}

// Store:
var store = createStore(counter);

// Map Redux state to component props
function mapStateToProps(state)  {
  return {
    value: state.count
  };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: function() {
      dispatch(increaseAction)
    }
  };
}

// Connected Component:
var App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

React.render(
  React.createElement(Provider, {store: store}, 
    function(){
      return React.createElement(App, null)
    }
  ),
  document.getElementById('root')
);
