import { combineReducers, applyMiddleware } from 'redux';
import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import cityReducer from './redux/reducer/cityReducer'

const rootReducer = combineReducers({ cityReducer });
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export { store }