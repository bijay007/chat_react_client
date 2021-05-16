import { combineReducers } from 'redux';
import tabToggleReducer from './tabToggleReducer';
import chatToggleReducer from './chatToggleReducer';

const rootReducer = combineReducers({
  tabCurrentState: tabToggleReducer,
  chatCurrentState: chatToggleReducer
});

export default rootReducer;