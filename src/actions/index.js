import axios from "axios";
import  { browserHistory } from "react-router";
import { AUTH_ERROR, AUTH_USER, UNAUTH_USER, FETCH_MESSAGE }  from "./types";

const ROOT_URL = "http://localhost:3090";

export function signinUser({email: email, password: password}) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signin`, {email: email, password: password})
      .then(response => {
        // If authenticated
        dispatch({type: AUTH_USER});

        // Save JWT token to local storage
        localStorage.setItem("token", response.data.token);

        browserHistory.push("/features");
      })
      .catch(() => {
        // IF login info is babel-loader
        dispatch(authError("Bad Login info"));
      });
  }
}

export function signupUser({email: email, password: password}) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, {email: email, password: password})
      .then(response => {
        dispatch({type: AUTH_USER});
        localStorage.setItem("token", response.data.token);
        browserHistory.push("/features");
      })
      .catch(response => dispatch(authError("Password has already taken")));
    }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function signoutUser() {
  localStorage.removeItem("token");
  return {
    type: UNAUTH_USER
  };
}

export function fetchMessage() {
  return function(dispatch) {
    axios.get(ROOT_URL, {headers: {authorization: localStorage.getItem("token")}})
      .then(response => {
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message
        });
      });
  };
}
