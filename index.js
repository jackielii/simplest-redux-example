import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { INCREASE, DECREASE } from './constants';
import counter from './reducers';
import Counter, { mapStateToProps, mapDispatchToProps } from './components'


// Store:
let store = createStore(counter);


// Connected Component:
let App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

React.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
