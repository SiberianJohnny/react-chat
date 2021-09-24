import { createStore } from 'redux';
import chatReducer from './chatReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(chatReducer, composeWithDevTools());