import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import {auth} from './reducers/auth'

const rootReducer = combineReducers({
  auth
});

export const store = createStore(rootReducer, applyMiddleware(thunk) /* preloadedState, */
   +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

