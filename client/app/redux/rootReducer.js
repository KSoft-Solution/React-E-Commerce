import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducer as notification } from "react-notification-system-redux";

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    notification,
  });

export default rootReducer;
