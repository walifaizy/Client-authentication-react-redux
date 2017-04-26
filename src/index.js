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

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
       <Route path="/signin" component={Signin}/>
       <Route path="/signout" component={Signout}/>
       <Route path="/signup" component={Signup}/>
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
