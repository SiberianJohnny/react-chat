import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import profileReducer from './profileReducer';
import chatsReducer from './chatsReducer';
import messagesReducer from './messagesReducer';

const reducers = combineReducers({
  profileReducer,
  chatsReducer,
  messagesReducer
})

export const store = createStore(reducers, composeWithDevTools());