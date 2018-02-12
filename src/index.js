// @flow
import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import store from "./store";
import history from "./history";

const root = document.getElementById("root");
if (root) {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    root
  );
} else {
  throw new Error("Couldn't find #root element");
}
registerServiceWorker();
