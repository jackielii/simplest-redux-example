import { INCREASE, DECREASE } from './constants';

//import { combineReducers } from 'redux';

// Reducer:
export default function counter(state={count: 0}, action) {
  let count = state.count;
  switch(action.type){
    case INCREASE:
      return {count: count+1};
    case DECREASE:
      return {count: count-1};
    default:
      return state;
  }
}

//const reducersApp = combineReducers({
//   reducer1,
//   reducer2,
//   ....
// })

//export default reducersApp;
