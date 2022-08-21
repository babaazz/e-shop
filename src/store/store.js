import { compose, applyMiddleware, createStore } from "redux";
// import logger from "redux-logger";

import rootReducer from "./rootReducer";

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  console.log("Type", action.type);
  console.log("Payload", action.payload);
  console.log("Prev state", store.getState());

  next(action);

  console.log("Next State", store.getState());
};

const middlewares = [loggerMiddleware];

const storeEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, storeEnhancers);
