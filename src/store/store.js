import { compose, applyMiddleware, createStore } from "redux";
import logger from "redux-logger";

import rootReducer from "./rootReducer";

const middlewares = [logger];

const storeEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, storeEnhancers);
