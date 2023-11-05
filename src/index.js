import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import reducer from "../src/reducers";

// Creating a store
const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
