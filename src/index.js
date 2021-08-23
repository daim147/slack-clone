import React from "react";
import ReactDOM from "react-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
