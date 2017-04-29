import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import  "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../style/style.css";
import reduxThunk from "redux-thunk";

import App from './components/app';
import reducers from './reducers';
import Signin from "./components/auth/Signin";
import Signout from "./components/auth/Signout";
import Signup from "./components/auth/Signup";
import RequireAuth from "./components/auth/Require_Auth";
import Features from "./components/Features";
import Welcome from "./components/Welcome";
import { AUTH_USER } from "./actions/types";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('token');
// If we have a token, consider the user to be signed in
if (token) {
  // we need to update application state
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome} />
        <Route path="signin" component={Signin} />
        <Route path="signout" component={Signout} />
        <Route path="signup" component={Signup} />
        <Route path="features" component={RequireAuth(Features)} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
