import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import profileReducer from './profileReducer';
import chatsReducer from './chatsReducer';
import messagesReducer from './messagesReducer';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authReducer';


const persistConfig = {
  key: 'root',
  storage,
};

const reducers = combineReducers({
  profileReducer,
  chatsReducer,
  messagesReducer,
  authReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));

export const persistor = persistStore(store);