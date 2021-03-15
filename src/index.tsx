import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./lib/redux/store";
import "./index.css";
import App from "./App";
import { loginSuccessActionCreator } from "./lib/redux/User/UserSlice";

function loadLocalUser() {
  try {
    const user = localStorage.getItem("loginUser");
    if (!user) return;
    store.dispatch(loginSuccessActionCreator(user));
  } catch (e) {
    console.log("localStorage is not working");
  }
}
function loadSessionUser() {
  try {
    const user = sessionStorage.getItem("loginUser");
    if (!user) return;
    store.dispatch(loginSuccessActionCreator(user));
  } catch (e) {
    console.log("sessionStorage is not working");
  }
}
loadLocalUser();
loadSessionUser();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
