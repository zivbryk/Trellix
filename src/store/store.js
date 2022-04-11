import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

import { boardReducer } from "./reducers/board.reducer";
import { appReducer } from "./reducers/app.reducer";
import { userReducer } from "./reducers/user.reducer";

const rootReducer = combineReducers({
  boardReducer,
  appReducer,
  userReducer,
});

// Wire up thunk & redux-dev-tools:
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
