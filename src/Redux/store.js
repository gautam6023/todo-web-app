import {
  combineReducers,
  compose,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";
//import { legacy_createStore as createStore } from "react-redux";
import thunk from "redux-thunk";
import { authReducer } from "./Auth/authReducer";

const reducer = combineReducers({
  isAuth: authReducer,
});
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);
export const store = createStore(reducer, enhancer);
