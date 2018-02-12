// @flow
import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "react-router-redux";
import reducer from "./reducer";
import history from "./history";

const store = createStore(reducer, applyMiddleware(routerMiddleware(history)));

export default store;
