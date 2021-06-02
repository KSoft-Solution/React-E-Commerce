import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

import rootReducer from "./rootReducer";

export const history = createBrowserHistory({
  basename: "/",
  hashType: "noslash",
});

const middleware = [thunk, logger, routerMiddleware(history)];
const enhancers = applyMiddleware(...middleware);

const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore(rootReducer(history), composeEnhancers(...enhancers));

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept("./rootReducer", () => {
    const nextRootReducer = require("./rootReducer").default; // eslint-disable-line global-require
    store.replaceReducer(nextRootReducer(history));
  });
}

export default store;
