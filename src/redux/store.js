import logger from "redux-logger";
import rootReducer from "./rootreducer";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
const middleware = [logger,thunk ]
export const store = createStore(rootReducer, applyMiddleware(...middleware))
