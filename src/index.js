import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "react-redux";
import store from "./components/store/store";
import "./loader.css";
const loader = document.querySelector(".loader");

// if you want to show the loader when React loads data again
const showLoader = () => loader.classList.remove("loader--hide");

const hideLoader = () => loader.classList.add("loader--hide");

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline />
      <App hideLoader={hideLoader} showLoader={showLoader} />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
