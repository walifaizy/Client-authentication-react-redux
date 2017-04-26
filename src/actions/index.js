import axios from "axios";
import  { browserHistory } from "react-router";
import { AUTH_ERROR, AUTH_USER, UNAUTH_USER }  from "./types";

const ROOT_URL = "http://localhost:3090";

export function signinUser({email: email, password: password}) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signin`, {email: email, password: password})
      .then(response => {
        // If authenticated
        dispatch({type: AUTH_USER});

        // Save JWT token to local storage
        localStorage.setItem("token", response.data.token);

        browserHistory.push("/feature");
      })
      .catch(() => {
        // IF login info is babel-loader
        dispatch(authError("Bad Login info"));
      });
  }
}

export function authError(string) {
  return {
    type: AUTH_ERROR,
    payload: string
  }
}

export function signoutUser() {
  localStorage.removeItem("token");
  return {
    type: UNAUTH_USER
  };
}
