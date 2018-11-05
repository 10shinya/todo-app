import React from 'react';
import { render } from "react-dom";
import createStore from "./store/store";
import { Provider } from "react-redux";
import TodoApp from "./container/todo";
import createBrowserHistory from "history/createBrowserHistory";
import { ConnectedRouter } from "react-router-redux";
import home from "./home";
import { Route } from "react-router-dom";
import "./App.css";
import "./index.css";




const history = createBrowserHistory();
const store = createStore(history);



render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={home} />
        <Route exact path="/todo" component={TodoApp} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
